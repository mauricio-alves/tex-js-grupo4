import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/sobremesas',
    name: 'sobremesas',
    component: () => import('@/views/SobremesasView.vue')
  },
  {
    path: '/pratos-quentes',
    name: 'pratos-quentes',
    component: () => import('@/views/PratosQuentesView.vue')
  },
  {
    path: '/accommodations',
    name: 'accommodations',
    component: () => import('@/views/AccommodationsView.vue')
  },
  {
    path: '/reservations',
    name: 'reservations',
    component: () => import('@/views/ReservationsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
