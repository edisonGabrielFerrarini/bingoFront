import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/form/Login'
import LoginAdmin from '../views/form/LoginAdmin'
import Cliente from '../views/cliente/Cliente'
import Cartela from '../views/cliente/telas/Cartela'
import Ticket from '../views/cliente/telas/Tickets'
import Dados from '../views/cliente/telas/Dados'
import Ganhadores from '../views/cliente/telas/Ganhadores'
import Admin from '../views/admin/Admin'
import CartelaAdmin from '../views/admin/telas/CartelaAdmin'
import AdminArea from '../views/admin/telas/AdminArea'
import Agente from '../views/admin/telas/Agente'
import ClientesAdmin from '../views/admin/telas/ClientesAdmin'
import Gerente from '../views/admin/telas/Gerente'
import GanhadoresAdmin from '../views/admin/telas/GanhadoresAdmin'
import Sorteios from '../views/cliente/telas/Sorteios'
import Sorteio from '../views/admin/telas/Sorteio'
import Cadastro from '../views/form/Cadastro.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/login_admin',
    name: 'LoginAdmin',
    component: LoginAdmin
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [
      {
        path: 'cartela-admin',
        component: CartelaAdmin,
        name: 'cartela-admin'
      },
      {
        path: 'clientes',
        component: ClientesAdmin,
        name: 'clientes'
      },
      {
        path: 'configura',
        component: AdminArea,
        name: 'configura'
      },
      {
        path: 'ganhadores',
        component: GanhadoresAdmin,
        name: 'ganhadores'
      },
      {
        path: 'agente',
        component: Agente,
        name: 'agente'
      },
      {
        path: 'gerente',
        component: Gerente,
        name: 'gerente'
      },
      {
        path: 'sorteio',
        component: Sorteio,
        name: 'sorteio'
      },
    ]
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
        path: 'sorteios',
        component: Sorteios,
        name: 'sorteios'
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
  base: process.env.BASE_URL,
  routes
})

export default router
