import VueRouter from 'vue-router'
import Main from '@/views/main/index.vue'

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/carousel',
    component: () => import('@/views/carousel/index.vue'),
  },
  {
    path: '/router-guard',
    component: () => import('@/views/router-guard/index.vue'),
  },
]

const router = new VueRouter({
  routes
})

export { router }
