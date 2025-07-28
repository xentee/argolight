<template>
  <div class="rockets-page">
    <h1>Liste des fusées</h1>
    <Loader v-if="loading" />
    <ErrorMessage v-if="error" :message="error" />
    <div v-else class="grid">
      <RocketCard
        v-for="r in rockets"
        :key="r._id"
        :rocket="r"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import api from '../services/api'
import Loader from '../components/Loader.vue'
import ErrorMessage from '../components/ErrorMessage.vue'
import RocketCard from '../components/RocketCard.vue'

export default {
  name: 'RocketList',
  components: { Loader, ErrorMessage, RocketCard },
  setup() {
    const rockets = ref([])
    const loading = ref(false)
    const error = ref('')

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

    return { rockets, loading, error }
  }
}
</script>

<style scoped>
.rockets-page { padding: 2rem; }
.grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
  gap: 1rem; 
}
</style>
