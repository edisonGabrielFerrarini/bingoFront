<template>
  <v-card
    flat
    class="text-center my-12"
  >
    <v-card-text>
      <Premiacao valor="500.000.000"/>
        <p>Cartela nº 10000</p>
      <div>
        <v-card-text
          class="my-10"
        >
        <p>ESCOLHA 20 NUMEROS</p>
          <v-btn v-for="n in 60" :key="n"
            class="ma-1"
            color="green"
          >
            {{n}}
          </v-btn>
        </v-card-text>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import Premiacao from '../../../components/cliente/cartela/Premiacao.vue'
export default {
  components: {
    Premiacao
  }
}
</script>

<style>

</style>