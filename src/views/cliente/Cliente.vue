<template>
  <v-main>
    <Header :saldo="info.saldo"/>
    <v-main>
      <Cartela/>
    </v-main>
  </v-main>
</template>

<script>
import { getUser } from '../../services/login.service'
import Header from './header/Header.vue'
import Cartela from './telas/Cartela.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  components: { 
    Header,
    Cartela,
  },
  data(){
    return {
      info: [],
    }
  },
  created(){
    if(this.getInformacoes.id == null){
      this.$router.push('Login')
    }
  },
  computed: {
    ...mapGetters(['getInformacoes'])
  },
  methods: {
    ...mapActions(['actionInformacoes']),
  }
}
</script>

<style>

</style>