import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/resume',
    name: 'resume',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>import('/src/views/ResumeView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () =>import('/src/views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
