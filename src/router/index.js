import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import InfoView from '../views/InfoView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/info',
    name: 'info',
    component: InfoView
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
