<template>
  <v-container>
    <div
      class="text-center">
        <v-btn
          width="100%"
          height="50"
          color="success"
          @click="sortear()"
        >iniciar sorteio</v-btn>
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
import {sorteia} from '../../../services/admin.service'
export default {
  data(){
    return {
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
      const resultado = await sorteia()
      
      if(resultado === 'Não há cartela ativa'){
        this.dialog.ativar = true
        this.dialog.text = resultado
        this.dialog.icon = 'mdi-thumb-down'
        this.dialog.color = 'red'
      }else if(resultado === 'Não houve ganhadores, sua cartela foi acumulada'){
        this.dialog.ativar = true
        this.dialog.text = resultado
        this.dialog.icon = 'mdi-thumb-down'
        this.dialog.color = 'red'
      }else{
        this.dialog.ativar = true
        this.dialog.text = resultado
        this.dialog.icon = 'mdi-thumb-up'
        this.dialog.color = 'green'
      }
      

    }
  }
}
</script>

<style>

</style>