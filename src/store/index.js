import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const modulesCliente = {
  state: {
    informacoes: {
      id: null,
      nome: null,
      celular: null,
      cidade: null,
      cpf: null,
      saldo: null,
      telefone: null
    }
  },
  getters: {
    getInformacoes(state){
      return state.informacoes
    }
  },
  mutations: {
    setInformacoes(state, cliente){
      state.informacoes.id = cliente.id
      state.informacoes.nome = cliente.nome
      state.informacoes.celular = cliente.celular
      state.informacoes.cidade = cliente.cidade
      state.informacoes.cpf = cliente.cpf
      state.informacoes.saldo = cliente.saldo
      state.informacoes.telefone = cliente.telefone
    },
    setSaldo(state, saldo){
      state.informacoes.saldo -= saldo
    }
  },
  actions: {
    actionInformacoes({commit}, payload){
      commit('setInformacoes', payload)
    },
    updateSaldo({commit}, payload){
      commit('setSaldo', payload)
    }
  }
}

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cliente: modulesCliente
  }
})



