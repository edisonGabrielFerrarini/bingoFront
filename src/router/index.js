import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/form/Login'
import Cliente from '../views/cliente/Cliente'
import Cartela from '../views/cliente/telas/Cartela'
import Ticket from '../views/cliente/telas/Tickets'
import Dados from '../views/cliente/telas/Dados'
import Ganhadores from '../views/cliente/telas/Ganhadores'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cliente',
    name: 'cliente',
    component: Cliente,
    children: [
      {
        path: 'cartela',
        component: Cartela,
        name: 'cartela'
      },
      {
        path: 'tickets',
        component: Ticket,
        name: 'tickets'
      },
      {
        path: 'dados',
        component: Dados,
        name: 'dados'
      },
      {
        path: 'ganhadores',
        component: Ganhadores,
        name: 'ganhadores'
      },
    ]
  },
  {
    path: '/*',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
