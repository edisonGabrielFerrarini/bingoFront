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
  </v-row>
</template>

<script>
import { postTicket } from '../../../services/cartela.service'
import {mapActions} from 'vuex'
 export default {
   props: {
    numerosEscolhidos: Array,
    id: Number,
    premio: Number,
    idCliente: Number
   },
  data () {
    return {
      dialog: false,
    }
  },
  methods: {
    ...mapActions(['updateSaldo']),

    async enviar(){
      const response = await postTicket(this.idCliente, this.numerosEscolhidos)
      this.updateSaldo(response.data.valor);
      this.dialog = false
    }
  }
  }
</script>

<style>
  .centralizar {
    text-align: center;
  }
</style>