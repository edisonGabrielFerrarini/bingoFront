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
      <v-card class="pt-10">
        <v-card-text class="text-center">
          {{dialog.text}}
        </v-card-text>
        <v-card-text class="text-center">
          {{dialog.ganhadores}}
        </v-card-text>
        <v-card-text class="text-center">
          {{dialog.numeros}}
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
      info: '',
      numeros: '',
      dialog: {
        ativar: false,
        text: '',
        ganhadores: '',
        numeros: '',
        icon: '',
        color: ''
      },
    }
  },
  methods: {
    async sortear(){
      try{
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
          this.dialog.color = 'error'
        }else{
          resultado.map((it)=>{
            this.dialog.ganhadores += ` id: ${it.id_cliente} nome: ${it.nome} \n`
          })
          this.dialog.numeros = `numeros: \n ${resultado[0].numeros.toString().replace('[','').replace(']','')}`
          this.dialog.ativar = true
          this.dialog.text = `Ganhadores`
          this.dialog.icon = 'mdi-thumb-up'
          this.dialog.color = 'success'
        }
      }catch(e){
        this.dialog.ativar = true
        this.dialog.text = 'Não há cartelas'
        this.dialog.ganhadores = ''
        this.dialog.numeros = ''
        this.dialog.icon = 'mdi-thumb-down'
        this.dialog.color = 'error'
      }
    }
  }
}
</script>

<style>

</style>