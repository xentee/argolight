import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import RocketList from '../views/RocketList.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/rockets', component: RocketList }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
