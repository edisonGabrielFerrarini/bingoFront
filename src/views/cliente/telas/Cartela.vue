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
        <p>ESCOLHA {{ 20 - numerosEscolidos.length }} {{ numerosEscolidos.length == 19 ? 'NUMERO' : 'NUMEROS' }}</p>
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
      <v-flex>
        <h1 class="mb-4" v-if="numerosEscolidos.length > 0">
          Numeros Escolhidos
        </h1>
        <v-btn v-for="n in numerosEscolidos" :key="n"
            max-width="20"
            width="10"
            height="60"
            max-height="60"
            class='ma-1 rounded-circle'
            color="#8FE7E8"
            @click="removerEscolhido(n)"
          >
            {{n}}
          </v-btn>
      </v-flex>
      <v-flex class="mt-10" v-if="numerosEscolidos.length == 20">
        <h1 class="mb-4" >
          Comprar Ticket
        </h1>
        <v-btn
          width="150"
          height="80"
          color="primary"
        >
            Comprar
          </v-btn>
      </v-flex>
      <v-flex>

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
      ],
      numerosEscolidos: [],
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
      if(this.numerosEscolidos.length < 20 || this.numerosEscolidos.indexOf(this.value[x].bola) != -1){
        this.value[x].ativo = !this.value[x].ativo
        if(this.value[x].ativo == false) {
          this.numerosEscolidos.push(this.value[x].bola)
        }else {
          this.numerosEscolidos.splice(this.numerosEscolidos.indexOf(this.value[x].bola), 1)
        }
      }
       if(this.numerosEscolidos.length > 0){
        console.log(this.numerosEscolidos.sort(this.sorted))
      }
    },
    sorted(a,b){
      return (a - b)
    },
    removerEscolhido(n){
      this.numerosEscolidos.splice(this.numerosEscolidos.indexOf(n),1)
      this.value.forEach((bola) => {
        if(bola.bola === n){
          bola.ativo = true
        } 
      })

    }
  }
}
</script>

<style>
  .bolas {
    border-radius: 50%;
  }
</style>