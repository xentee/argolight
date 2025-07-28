<template>
  <div class="error-message">{{ message }}</div>
</template>
<script>
export default {
  props: ['message']
}
</script>
<style scoped>
.error-message { color: red; text-align: center; padding: 1rem; }
</style>
