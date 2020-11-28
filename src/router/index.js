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
  {
    path: '/aplatos',
    name: 'APlatos',
    component: () => import('../views/APlatos.vue')
  },
  {
    path: '/acarta',
    name: 'ACarta',
    component: () => import('../views/ACarta.vue')
  },
  {
    path: '/apedidos',
    name: 'APedidos',
    component: () => import('../views/APedidos.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/arepartidores',
    name: 'ARepartidores',
    component: () => import('../views/ARepartidores.vue')
  },
  {
    path: '/amenu',
    name: 'AMenu',
    component: () => import('../views/AMenu.vue')
  },
  {
    path: '/aextra',
    name: 'AExtra',
    component: () => import('../views/AExtra.vue')
  },
  {
    path: '/datospedido',
    name: 'DatosPedido',
    component: () => import('../views/DatosPedido.vue')
  },
  {
    path: '/mispedidos',
    name: 'MisPedidos',
    component: () => import('../views/MisPedidos.vue')
  },
  {
    path: '/dpedido',
    name: 'DPedido',
    component: () => import('../views/DPedido.vue')
  },
  {
    path: '/rpedido',
    name: 'RPedido',
    component: () => import('../views/RPedido.vue')
  },
  {
    path: '/candidatos',
    name: 'Candidatos',
    component: () => import('../views/candidatos.vue')
  },
  {
    path: '/incidencias',
    name: 'Incidencias',
    component: () => import('../views/incidencias.vue')
  },
  {
    path: '/propuestas',
    name: 'Propuestas',
    component: () => import('../views/propuestas.vue')
  },
  {
    path: '/reportesPropuestas',
    name: 'ReportesPropuestas',
    component: () => import('../views/reportesPropuestas.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
