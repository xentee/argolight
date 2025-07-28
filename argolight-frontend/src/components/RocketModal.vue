<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-card">
      <header class="modal-header">
        <h2>{{ rocket.name }}</h2>
        <button class="close-btn" @click="$emit('close')">×</button>
      </header>
      <img class="modal-image" :src="rocket.coverUrl" :alt="rocket.name" />
      <div class="modal-details">
        <p><strong>Pays :</strong> {{ rocket.country }}</p>
        <p><strong>1er vol :</strong> {{ new Date(rocket.firstFlight).toLocaleDateString() }}</p>
        <p><strong>Hauteur :</strong> {{ rocket.height }} m</p>
        <p><strong>Diamètre :</strong> {{ rocket.diameter }} m</p>
        <p><strong>Masse :</strong> {{ rocket.mass.toLocaleString() }} kg</p>
        <p><strong>Charge utile :</strong> {{ rocket.payloadCapacity.toLocaleString() }} kg</p>
        <p><strong>Étages :</strong> {{ rocket.stages }}</p>
        <p class="description">{{ rocket.description }}</p>
        <p><a :href="rocket.wikipedia" target="_blank">En savoir plus sur Wikipédia</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  rocket: { type: Object, required: true }
});
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-card {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  overflow: hidden;
  animation: fadeIn 0.2s ease-out;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1abc9c;
  color: white;
  padding: 1rem;
}
.close-btn {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  color: white;
}
.modal-image {
  width: 100%;
  height: auto;
}
.modal-details {
  padding: 1rem;
  color: #333;
}
.modal-details p {
  margin: 0.5rem 0;
}
.modal-details .description {
  margin-top: 1rem;
}
.modal-details a {
  color: #1abc9c;
  text-decoration: none;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
