import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/form/Login'
import Cliente from '../views/cliente/Cliente'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/cliente',
    name: 'Cliente',
    component: Cliente
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
