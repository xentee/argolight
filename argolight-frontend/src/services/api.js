import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

const savedToken = localStorage.getItem('token');
if (savedToken) {
  api.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`;
}

export function setToken(token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  localStorage.setItem('token', token);
}

export default api;
