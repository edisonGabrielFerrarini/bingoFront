<template>
  <v-main>
    <Header :saldo="info.saldo"/>
    <v-main>
      <Cartela />
    </v-main>
  </v-main>
</template>

<script>
import { getUser } from '../../services/login.service'
import Header from './header/Header.vue'
import Cartela from './telas/Cartela.vue'

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
    this.init()
  },
  methods: {
    async init(){
      const usuario = await getUser('egf22@hotmail.com', '123')
      this.info = usuario
    }
  }
}
</script>

<style>

</style>