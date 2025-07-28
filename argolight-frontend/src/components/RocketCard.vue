<template>
  <div class="card">
    <div class="image-wrapper">
      <img :src="rocket.coverUrl" :alt="rocket.name" />
    </div>
    <div class="content">
      <h2 class="name">{{ rocket.name }}</h2>
      <p class="meta">
        <span>Pays : {{ rocket.country }}</span>
        <span>Premier vol : {{ formattedDate }}</span>
      </p>
      <p class="description">{{ rocket.description }}</p>
      <div class="status" :class="{ active: rocket.active }">
        {{ rocket.active ? 'En service' : 'Inactif' }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  rocket: {
    type: Object,
    required: true
  }
});

const formattedDate = computed(() =>
  new Date(props.rocket.firstFlight).toLocaleDateString()
);
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
}
.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.name {
  margin: 0;
  font-size: 1.25rem;
  color: #1f2c88;
}

.meta {
  margin: 0.5rem 0;
  font-size: 0.875rem;
  color: #666;
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
  padding: 0.5rem;
  border-radius: 6px;
  font-weight: 600;
  background: #e0e0e0;
  color: #555;
}
.status.active {
  background: #1abc9c;
  color: white;
}
</style>
