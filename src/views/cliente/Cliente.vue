<template>
  <v-main>
    <Header :saldo="info.saldo"/>
    <v-main>
      <router-view />
    </v-main>
  </v-main>
</template>

<script>
import Header from './header/Header.vue'
import {mapActions, mapGetters} from 'vuex'
import { getUser } from '../../services/login.service'

export default {
  components: { 
    Header,
  },
  data(){
    return {
      info: [],
    }
  },
  async created(){
    if(localStorage.getItem('user') && localStorage.getItem('pass')){
        const usuario = await getUser(localStorage.getItem('user'), localStorage.getItem('pass'))
        if(usuario.status === 200){
          this.actionInformacoes(usuario.data)
        }
      }
    if(this.getInformacoes.id == null){
      this.$router.push('Login')
    }
  },
  computed: {
    ...mapGetters(['getEmail'])
  },
  methods: {
    ...mapActions(['actionInformacoes']),
  }
}
</script>

<style>
   

</style>