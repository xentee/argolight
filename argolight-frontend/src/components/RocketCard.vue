<template>
  <div class="card">
    <img :src="rocket.coverUrl" :alt="rocket.name" />
    <h2>{{ rocket.name }}</h2>
    <p><strong>Pays :</strong> {{ rocket.country }}</p>
    <p><strong>1er vol :</strong> {{ new Date(rocket.firstFlight).toLocaleDateString() }}</p>
    <p>{{ rocket.description }}</p>
    <p>Status : <span>{{ rocket.active ? 'Active' : 'Inactive' }}</span></p>
  </div>
</template>

<script>
export default {
  props: ['rocket']
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
}
.card img {
  width: 100%;
  border-radius: 4px;
  margin-bottom: .5rem;
}
</style>
