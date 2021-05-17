<template>
  <v-container>
    <div
      class="text-center">
        <v-btn
          height="50"
          color="info"
          @click="sortear()"
        >buscar ativa</v-btn>
      </div>

    <div v-if="cartela.ativar">
      <v-form>
        <v-text-field
          label="Concurso"
          v-model="cartela.id"
        ></v-text-field>
        <v-text-field
          label="Valor por Ticket"
          v-model="cartela.valor_ticket"
        ></v-text-field>
        <v-text-field
          label="Prêmio"
          v-model="cartela.valor"
        ></v-text-field>
        <v-text-field
          label="Rendimentos da Cartela Ativa"
          v-model="cartela.rendimentos"
        ></v-text-field>
      </v-form>
    </div>




    <v-dialog
      v-model="dialog.ativar"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Cartela
        </v-card-title>

        <v-card-text class="text-center">
          {{dialog.text}}
        </v-card-text>
        <div
          class="text-center"
        >
          <v-icon
            :color="dialog.color"
          >{{dialog.icon}}</v-icon>
        </div>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red darken-1"
            text
            @click="dialog.ativar = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import {obterCartelaAtiva} from '../../../services/admin.service'
export default {
  data(){
    return {
      cartela: {
        id: '',
        valor: '',
        rendimentos: '',
        valor_ticket: '',
        ativar: false
      },
      dialog: {
        ativar: false,
        text: '',
        icon: '',
        color: ''
      },
    }
  },
  methods: {
    async sortear(){
      try{
        const resultado = await obterCartelaAtiva()
        this.cartela.id = resultado.id
        this.cartela.valor = resultado.valor
        this.cartela.rendimentos = resultado.rendimentos
        this.cartela.valor_ticket = resultado.valor_numero
        
        this.cartela.ativar = true
      }catch(e){
        this.cartela.ativar = false
        this.cartela.id = 0
        this.cartela.valor = 0
        this.cartela.rendimentos = 0
        this.cartela.valor_ticket = 0
        

        this.dialog.ativar = true
        this.dialog.text = 'Cartela não encontrada'
        this.dialog.icon = 'mdi-thumb-down'
        this.dialog.color = 'red'
      }
      
    }
  }
}
</script>

<style>

</style>