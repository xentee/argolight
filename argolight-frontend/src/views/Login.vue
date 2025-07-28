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
    localStorage.setItem('userEmail', email.value);
    router.push('/rockets');
  } catch (e) {
    error.value = e.response?.data?.error || 'Erreur lors de la connexion';
  }
}
</script>

<style scoped>
.login-page {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  padding: 2rem;
}

.login-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 2.5rem 3rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.login-card h1 {
  margin-bottom: 1.5rem;
  color: #302b63;
  font-size: 1.75rem;
}

.form-group {
  margin-bottom: 1.25rem;
  text-align: left;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #302b63;
}
.form-group input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  background: #f5f7fa;
  color: #333;
  transition: border-color 0.2s, background 0.2s;
}
.form-group input:focus {
  outline: none;
  border-color: #302b63;
  background: #fff;
}

.btn {
  display: inline-block;
  width: 100%;
  padding: 0.75rem;
  background: #302b63;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}
.btn:hover {
  background: #2a274b;
}
.btn:active {
  transform: scale(0.98);
}

.error {
  margin-top: 1rem;
  color: #e74c3c;
  font-weight: 600;
}

@media (max-width: 768px) {
  .login-card {
    padding: 2rem;
    max-width: 350px;
  }
  .login-card h1 {
    font-size: 1.5rem;
  }
  .form-group input {
    padding: 0.65rem 0.9rem;
  }
  .btn {
    padding: 0.65rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .login-card {
    padding: 1.5rem 2rem;
    max-width: 300px;
  }
  .login-card h1 {
    font-size: 1.25rem;
  }
  .form-group input {
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }
  .btn {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
}
</style>



