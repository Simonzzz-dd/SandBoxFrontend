// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('@/layouts/LoginPage.vue'),
  },
  {
    path: '/',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/request/:type',
        name: 'requests-page',
        component: () => import('@/views/requests/RequestsPage.vue'),
      },
      {
        path: '/response/:type',
        name: 'response-page',
        component: () => import('@/views/response/ResponsePage.vue'),
      },
      {
        path: '/result/:type',
        name: 'result-page',
        component: () => import('@/views/result/ResultPage.vue'),
      },
    ],
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
