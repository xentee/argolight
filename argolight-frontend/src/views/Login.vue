<template>
  <div class="login-page">
    <h1>Connexion</h1>
    <form @submit.prevent="onSubmit">
      <label>
        Email
        <input v-model="email" type="email" required />
      </label>
      <label>
        Mot de passe
        <input v-model="password" type="password" required />
      </label>
      <button type="submit">Se connecter</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import api, { setToken } from '../services/api'
import { useRouter } from 'vue-router'

export default {
  name: 'Login',
  setup() {
    const router = useRouter()
    const email = ref('')
    const password = ref('')
    const error = ref('')

    const onSubmit = async () => {
      error.value = ''
      try {
        const { data } = await api.post('/user/signin', {
          email: email.value,
          password: password.value
        })
        setToken(data.token)
        router.push('/rockets')
      } catch (e) {
        error.value = e.response?.data?.error || 'Erreur lors de la connexion'
      }
    }

    return { email, password, error, onSubmit }
  }
}
</script>

<style scoped>
.login-page { max-width: 400px; margin: auto; padding: 2rem; }
label { display: block; margin-bottom: 1rem; }
input { width: 100%; padding: .5rem; }
button { padding: .5rem 1rem; }
.error { color: red; margin-top: 1rem; }
</style>
