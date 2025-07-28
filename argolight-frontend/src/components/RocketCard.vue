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
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  height: 360px;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
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
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
}
.name {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  color: #1abc9c;
  flex-shrink: 0;
}
.meta {
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
}
.description {
  flex: 1;
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 1rem;
  overflow: hidden;
}
.status {
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 6px;
  font-weight: 600;
  background: #1abc9c;
  color: white;
  flex-shrink: 0;
}
</style>
