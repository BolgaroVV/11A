import { createRouter, createWebHistory } from 'vue-router'
import Introduction from '../components/Introduction.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Introduction
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/Container.vue')
    },
    {
      path: '/plan',
      name: 'plan',
      component: () => import('../components/Plan.vue')
    }
  ]
})

export default router
