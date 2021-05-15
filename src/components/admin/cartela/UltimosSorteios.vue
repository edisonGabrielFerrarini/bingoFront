<template>
  <v-container>
    <div
      class="text-center">
        <v-btn
          height="50"
          color="success"
          @click="ultimos()"
        >Buscar Ultimos</v-btn>
      </div>
    
      <v-card class="mt-5" v-for="item in resultados" :key="item.id">
        <v-card-title>Concurso {{item.id}}</v-card-title>
        <v-card-text>Numeros: {{item.numeros_sorteados.replace('[','').replace(']','').replaceAll(',',', ')}}</v-card-text>
        <v-card-text class="pt-0">Prêmio {{item.valor}}</v-card-text>
      </v-card>
    
  </v-container>
</template>

<script>
import {ultimosSorteios} from '../../../services/admin.service'
export default {
  data(){
    return {
      resultados: [],
      dialog: {
        ativar: false,
        text: '',
        icon: '',
        color: ''
      },
    }
  },
  methods: {
    async ultimos(){
      try {
        this.resultados = await ultimosSorteios()
        

        console.log(this.resultados);
      }catch(e){
        this.dialog.ativar = true
        this.dialog.text = `Não foi encontrada nenhuma cartela ativa`
        this.dialog.icon = 'mdi-thumb-down'
        this.dialog.color = 'red'
      }
    },

  }
}
</script>

<style>

</style>