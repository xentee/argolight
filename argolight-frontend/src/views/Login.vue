<template>
  <div class="login-page">
    <div class="login-card">
      <h1>Connexion</h1>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="votre@email.com"
          />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            placeholder="••••••••"
          />
        </div>
        <button type="submit" class="btn">Se connecter</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import api, { setToken } from '../services/api';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');
const error = ref('');

async function onSubmit() {
  error.value = '';
  try {
    const { data } = await api.post('/user/signin', {
      email: email.value,
      password: password.value
    });
    setToken(data.token);
    localStorage.setItem('token', data.token);
    router.push('/rockets');
  } catch (e) {
    error.value = e.response?.data?.error || 'Erreur lors de la connexion';
  }
}
</script>

<style scoped>
/* Page centré plein écran */
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1f2c88, #1abc9c);
}

/* Card blanche avec ombre */
.login-card {
  background: white;
  border-radius: 12px;
  padding: 2.5rem 3rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

/* Titre */
.login-card h1 {
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.75rem;
}

/* Groupe label+input */
.form-group {
  margin-bottom: 1rem;
  text-align: left;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #555;
}
.form-group input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s;
}
.form-group input:focus {
  outline: none;
  border-color: #1abc9c;
}

/* Bouton primary */
.btn {
  display: inline-block;
  width: 100%;
  padding: 0.75rem;
  background: #1abc9c;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}
.btn:hover {
  background: #169d83;
}
.btn:active {
  transform: scale(0.98);
}

/* Message d’erreur */
.error {
  margin-top: 1rem;
  color: #e74c3c;
  font-weight: 500;
}
</style>
