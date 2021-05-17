<template>
  <v-container>
    
    <div class="text-center">
      <h1 class="text-center mt-10">Ultimos Sorteios</h1>
    </div>

    <v-card class="mt-5" v-for="item in resultados" :key="item.id">
      <v-card-title>Concurso {{item.id}}</v-card-title>
      <v-card-text>Numeros: {{item.numeros_sorteados.replace('[','').replace(']','').replaceAll(',',', ')}}</v-card-text>
      <v-card-text class="pt-0">Prêmio {{item.valor}}</v-card-text>
    </v-card>
  
  </v-container>
</template>

<script>
import {ultimosSorteios} from '../../../services/cartela.service'
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

  async created(){
    try {
      this.resultados = await ultimosSorteios()
    }catch(e){
      this.dialog.ativar = true
      this.dialog.text = `Não foi encontrada nenhuma cartela ativa`
      this.dialog.icon = 'mdi-thumb-down'
      this.dialog.color = 'red'
    }
  }
}
</script>

<style>

</style>