import { createRouter, createWebHistory } from 'vue-router'
import LoginComponent from '@/components/LoginComponent.vue'
import StartView from '@/views/StartView.vue'
import HomePageView from '@/views/HomePageView.vue'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: StartView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePageView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
