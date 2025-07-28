import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export function setToken(token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;
