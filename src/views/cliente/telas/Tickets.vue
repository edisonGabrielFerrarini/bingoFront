<template>
  <v-container>
    <div class="text-center">
      <h1 class="text-center mt-10">Meus Tickets</h1>
      <v-btn @click="buscarAtivos" :color="buttons.ativo" class="mr-2">ativos</v-btn>
      <v-btn @click="buscarTodos" :color="buttons.todos" class="ml-2">todos</v-btn>
    </div>
    <v-row
      no-gutters
      v-if="tickets"
    > 
      <v-col
        xs="6"
        v-for="ticket in tickets"
        :key="ticket.id"
      >
        <v-card
          class="mx-12 mt-10"
        >
        <v-card-subtitle class="pb-0 text-center">
          Ticket Nº {{ ticket.id }}
        </v-card-subtitle>

        <v-card-text class="text--primary text-center">
          <div>Concurso Nº {{ ticket.id_cartela }}</div>
          <div>Prêmio: {{ ticket.valor_premio }}</div>
          <div>Valor Ticket: {{ ticket.valor }}</div>
          <div>Numeros Escolhidos: {{ ticket.numeros.replace('[','').replace(']','') }}</div>
        </v-card-text>
        </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
import {getTicketAtivo, getTicketTodos} from '../../../services/cartela.service'
import {mapGetters} from 'vuex'

export default {
  data(){
    return {
      tickets: [],
      numeros: [],
      buttons: {
        ativo: 'success',
        todos: ''
      }
    }
  },
  computed: {
    ...mapGetters(['getInformacoes'])
  },
  async created(){
    await this.buscarAtivos()
  },

  methods: {
    async buscarAtivos(){
      try{
        this.tickets = await getTicketAtivo(this.getInformacoes.id)
        this.buttons.ativo = 'success'
        this.buttons.todos = ''
      }catch(e){

      }
    },

    async buscarTodos(){
      try{
        this.tickets = await getTicketTodos(this.getInformacoes.id)
        this.buttons.ativo = ''
        this.buttons.todos = 'success'
      }catch(e){

      }
    }


  }

}
</script>

<style>

</style>