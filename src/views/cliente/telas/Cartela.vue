<template>
  <v-card
    flat
    class="text-center my-12"
    v-if="cartelaAtiva"
  >
    <v-card-text>
      <Premiacao :valor="premio"/>
        <p>Sorteio nº {{idCartela}}</p>
      <v-flex>
        <v-card-text
          class=" my-5"
        >
        <p>ESCOLHA {{ 20 - numerosEscolidos.length }} {{ numerosEscolidos.length == 19 ? 'NUMERO' : 'NUMEROS' }}</p>
          <v-btn v-for="n in 60" :key="n"
            max-width="20"
            width="10"
            height="60"
            max-height="60"
            class='ma-1 rounded-circle'
            :color="value[n].ativo ? 'yellow' : 'green'"
            @click="escolha(n)"
          >
            {{n}}
          </v-btn>
        </v-card-text>
      </v-flex>
      <v-flex>
        <v-btn
          @click="gerarNumerosAleatorios()"
          color="secondary"
        >
          Gerar numeros aleatorios
        </v-btn>
      </v-flex>
      <v-flex>
        <h1 class="mb-4 mt-8" v-if="numerosEscolidos.length > 0">
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
        <ModalTicket @clear="clear" class="ml-0" :idCliente="getInformacoes.id" :id="idCartela" :numerosEscolhidos="numerosEscolidos" :premio="premio" :valor_bilhete="valor_numero"/>
      </v-flex>
    </v-card-text>
  </v-card>
  <v-card v-else class="my-10">
    <v-card-text class="text-center my-12">
      <h1 class="my-12">Não há nenhuma cartela ativa</h1>
    </v-card-text>
  </v-card>
</template>

<script>
import ModalTicket from '../../../components/cliente/cartela/ModalTicket.vue'
import Premiacao from '../../../components/cliente/cartela/Premiacao.vue'
import { getCartela } from '../../../services/cartela.service'
import {mapGetters, mapActions} from 'vuex'
import SnackBar from '../../../components/cliente/cartela/SnackBar.vue'
export default {
  components: {
    Premiacao,
    ModalTicket,
    SnackBar
  },
  computed: {
    ...mapGetters(['getInformacoes'])
  },
  data(){
    return {
      value: [{
          bola: 0,
          ativo: true
        }
      ],
      numerosEscolidos: [],
      comprar: false,
      idCartela: null,
      premio: null,
      valor_numero: null,
      snackbar: false,
      sucesso: true,
      text: '',
      color: '',
      cartelaAtiva: true
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
  created(){
    this.$forceUpdate()
    this.init()
  },  
  methods: {
    ...mapActions(['snackBarAction']),

    async init(){
      try{
        var cartela = await getCartela()
        this.idCartela = cartela.id
        this.premio = cartela.valor
        this.valor_numero = cartela.valor_numero
        this.cartelaAtiva = true
      }catch(e){
        this.cartelaAtiva = false
      }
    },
    clear(){
      this.numerosEscolidos = []
      this.value.forEach((bola) => {
        bola.ativo = true
      })
    },
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
        this.numerosEscolidos.sort(this.sorted)
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
    },
    gerarNumerosAleatorios(){
      var list = []
      this.value.forEach((bola) => {
        bola.ativo = true
      })
      while (list.length < 20){
          var numero = Math.ceil(Math.random() * (60 - 1) + 1)
          var verificar = true
          while (verificar){
              if (list.indexOf(numero) == -1){
                  verificar = false
              }else {
                  numero = Math.ceil(Math.random() * (60 - 1) + 1)
              }
          }
          list.push(numero)
      }
      this.numerosEscolidos = list.map(it => {
        this.ativarNumeros(it)
        return it
      })
      this.numerosEscolidos.sort(this.sorted)

    },
    ativarNumeros(n){
      this.value.forEach((bola) => {
        if(bola.bola === n){
          bola.ativo = false
        } 
      })
    },
  }
}
</script>

<style>
  .bolas {
    border-radius: 50%;
  }

  .numeroAleatorio {
    color: white;
  }
</style>