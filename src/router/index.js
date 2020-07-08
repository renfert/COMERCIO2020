import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import( '../views/Registro.vue')
  },
  {
    path: '/carta',
    name: 'Carta',
    component: () => import('../views/Carta.vue')
  },
  {
    path: '/ccarta',
    name: 'CCarta',
    component: () => import('../views/CCarta.vue')
  },
  {
    path: '/cpedidos',
    name: 'CPedidos',
    component: () => import('../views/CPedidos.vue')
  },

  {
    path: '/abienvenida',
    name: 'ABienvenida',
    component: () => import('../views/ABienvenida.vue')
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
