<template>
  <v-main>
    <v-container
    >
      <v-row
        v-if="ganhadores"
      > 
        <v-col
          xs="6"
          v-for="ganhador in ganhadores"
          :key="ganhador.id"
        >
          <v-card
            class="mx-12 mt-10  "
          >
          <v-card-subtitle class="pb-0 text-center">
            <div>{{ ganhador.nome }}</div>
          </v-card-subtitle>

          <v-card-text class="text--primary text-center">
            <div>Concurso Nº {{ ganhador.id_cartela }}</div>
            <div>Ticket Nº {{ ganhador.id_ticket }}</div>
            <div>Ganhador: {{ ganhador.nome }}</div>
            <div>Id Ganhador: {{ ganhador.id }}</div>
            <div>Estado: {{ ganhador.estado }}</div>
            <div>Prêmio: {{ ganhador.valor_premio }}</div>
            <div>Numeros Escolhidos: {{ ganhador.numeros.toString().replace('[','').replace(']','') }}</div>
            <div>data: {{ ganhador.data_premio.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1') }}</div>
          </v-card-text>
          </v-card>
      </v-col>
    </v-row>
    </v-container>
  </v-main>
</template>

<script>
import {getGanhadores} from '../../../services/cartela.service'
export default {
  data(){
    return {
      ganhadores: []
    }
  },
  async created(){
    var responseGanhadores = await getGanhadores()
    responseGanhadores.content.map((it)=>{
      this.ganhadores.push(it)
    })
  }
}
</script>

<style>

</style>