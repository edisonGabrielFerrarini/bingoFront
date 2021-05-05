import Vue from 'vue'
import VueRouter from 'vue-router'
import Cliente from '../views/form/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cliente',
    component: Cliente
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
