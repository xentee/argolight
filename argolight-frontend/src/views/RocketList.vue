<template>
  <div class="rockets-page">
    <header class="header">
      <h1>Nos Fusées</h1>
      <div class="header-right">
        <span class="user-info">{{ userEmail }}</span>
        <button class="logout-btn" @click="logout">Déconnexion</button>
      </div>
    </header>

    <div v-if="loading" class="loader-wrapper">
      <Loader />
    </div>
    <ErrorMessage v-if="error" :message="error" />

    <div v-else class="grid">
      <div v-for="r in rockets" :key="r._id" @click="openModal(r)">
        <RocketCard :rocket="r" />
      </div>
    </div>

    <RocketModal v-if="selected" :rocket="selected" @close="closeModal" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'
import Loader from '../components/Loader.vue'
import ErrorMessage from '../components/ErrorMessage.vue'
import RocketCard from '../components/RocketCard.vue'
import RocketModal from '../components/RocketModal.vue'

const router = useRouter()
const rockets = ref([])
const loading = ref(false)
const error = ref('')
const selected = ref(null)
const userEmail = ref(localStorage.getItem('userEmail') || '');

function openModal(r) {
  selected.value = r
}
function closeModal() {
  selected.value = null
}

function logout() {
  localStorage.removeItem('token');
  delete api.defaults.headers.common['Authorization'];
  router.push('/login');
}

onMounted(async () => {
  loading.value = true
  try {
    const { data } = await api.get('/rocket')
    rockets.value = data
  } catch (e) {
    error.value = e.response?.data?.error || 'Impossible de charger les fusées'
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.rockets-page {
  position: relative;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  display: flex;
  flex-direction: column;
  color: #fff;
}

.header {
  position: relative;
  padding: 0 2rem;
  margin-bottom: 5rem;
}

.header h1 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  color: #fff;
  font-size: 2.5rem;
  text-shadow: 0 0 8px rgba(0,0,0,0.4);
}

.header-right {
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.user-info {
  background: rgba(255,255,255,0.1);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
}

.logout-btn {
  background: #e74c3c;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s, transform 0.1s;
}
.logout-btn:hover {
  background: #c0392b;
}
.logout-btn:active {
  transform: scale(0.98);
}

.loader-wrapper,
.error-message {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.error-message {
  color: #e74c3c;
  font-weight: 600;
}

.grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  z-index: 1;
}

.grid > div {
  cursor: pointer;
}

.card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.image-wrapper {
  aspect-ratio: 16/9;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  padding: 1rem;
  flex: 1;
  color: #333;
}

.name {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  color: #1abc9c;
}

.meta {
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: space-between;
}

.description {
  flex: 1;
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 1rem;
}

.status {
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 6px;
  font-weight: 600;
  background: #1abc9c;
  color: #fff;
}

.status.inactive {
  background: #bdc3c7;
  color: #555;
}
</style>
