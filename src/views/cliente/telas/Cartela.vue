<template>
  <v-card
    flat
    class="text-center my-12"
  >
    <v-card-text>
      <Premiacao valor="500.000.000"/>
        <p>Cartela nº 10000</p>
      <v-flex>
        <v-card-text
          class=" my-10"
        >
        <p>ESCOLHA 20 NUMEROS</p>
          <v-btn v-for="n in 60" :key="n"
            max-width="20"
            width="10"
            height="60"
            max-height="60"
            class='ma-1 rounded-circle'
            :color="value[n].ativo ? 'green' : 'yellow'"
            @click="escolha(n)"
          >
            {{n}}
          </v-btn>
        </v-card-text>
      </v-flex>
    </v-card-text>
  </v-card>
</template>

<script>
import Premiacao from '../../../components/cliente/cartela/Premiacao.vue'
export default {
  components: {
    Premiacao
  },
  data(){
    return {
      value: [{
          bola: 0,
          ativo: true
        }
      ]
    }
  },
  beforeMount(){
    for (let x = 1; x <= 60; x++) {
      this.value.push({
        bola: x,
        ativo: true
      })
    }
  },
  methods: {
    escolha(x){
      this.value[x].ativo = !this.value[x].ativo
    },
  }
}
</script>

<style>
  .bolas {
    border-radius: 50%;
  }
</style>