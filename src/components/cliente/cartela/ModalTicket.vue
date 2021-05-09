<template>
  <v-row justify="center">
    <v-btn
      color="primary"
      width="150"
      height="80"
      dark
      @click.stop="dialog = true"
    >
      Comprar
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card >
        <v-card-text>
          <h1 class="text-center pt-2 pb-5">Ticket</h1>
          <p class="mb-0 text-center">Cartela número</p>
          <p class="text-center pb-0"><strong>{{ id }}</strong></p>
          <p class="mb-0 mt-0 pb-0 text-center">Prêmio</p>
          <p class="text-center"><strong>{{ premio }}</strong></p>
          <p class="mb-0 mt-0 text-center">Números escolhidos</p>
          <p class="text-center">
            <strong v-for="i in numerosEscolhidos" :key="i">
              {{i}} <strong v-if="numerosEscolhidos[numerosEscolhidos.length - 1] != i">-</strong> 
            </strong>
          </p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red darken-1"
            text
            @click="dialog = false"
          >
            Cancelar
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="enviar()"
          >
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
      v-model="snackbar"
      top
    >
      {{ text }}
      
      <template v-if="sucesso" v-slot:action="{ attrs }">
        <v-btn
          color="blue lighten-2"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          <v-icon>mdi-thumb-up</v-icon>
        </v-btn>
      </template>

      <template v-else v-slot:action="{ attrs }">
        <v-btn
          color="red lighten-2"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          <v-icon>mdi-thumb-down</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-row>
</template>

<script>
import { postTicket } from '../../../services/cartela.service'
import {mapActions, mapGetters} from 'vuex'
import { getCartela } from '../../../services/cartela.service'
 export default {
   props: {
    numerosEscolhidos: Array,
    id: Number,
    premio: Number,
    idCliente: Number,
    valor_bilhete: Number
   },
  data () {
    return {
      snackbar: false,
      sucesso: true,
      dialog: false,
      text: '',
      color: ''
    }
  },
  computed: {
    ...mapGetters(['getInformacoes'])
  },
  methods: {
    ...mapActions(['updateSaldo']),

    async enviar(){
      try{
        if(this.getInformacoes.saldo >= this.valor_bilhete ){
          const response = await postTicket(this.idCliente, this.numerosEscolhidos)
          if(response.status === 202 || response.status === 200){
            this.updateSaldo(response.data.valor);
            this.dialog = false
            this.snackbar = true
            this.sucesso = true
            this.text = 'Sua compra foi efetuada com sucesso'
            this.color = 'success'
          }
        }else{
            this.dialog = false
            this.snackbar = true
            this.sucesso = false
            this.text = 'Seu saldo é insuficiente'
            this.color = 'warning'
        }
      }catch(e){
            this.dialog = false
            this.snackbar = true
            this.sucesso = false
            this.text = 'Ocorreu um erro ao ralizar a compra'
            this.color = 'warning'
      }
      
    }
  }
  }
</script>

<style>
  .centralizar {
    text-align: center;
  }
</style>