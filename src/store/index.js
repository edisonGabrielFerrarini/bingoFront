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

const modulesSnackBar = {
  state: {
    snackBarStates: {
      snackbar: false,
      sucesso: true,
      text: 'Sua compra foi efetuada com sucesso',
    } 
  },
  getters: {
    getSnackBarStates(state){
      return state.snackBarStates
    }

  },
  mutations: {
    setSnackBarStates(states, payload){
      console.log(payload);
      states.snackBarStates.snackbar = payload.snackbar,
      states.snackBarStates.sucesso = payload.sucesso,
      states.snackBarStates.text = payload.text
    },
    setFecharSnackBar(states, payload){
      states.snackBar = payload.snackBar
    }
  },
  actions: {
    snackBarAction({commit}, payload){
      commit('setSnackBarStates', payload)
    },
    fecharSnackBar({commit}, payload){
      commit('setFecharSnackBar', payload)
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
    cliente: modulesCliente,
    snackBar: modulesSnackBar
  }
})



