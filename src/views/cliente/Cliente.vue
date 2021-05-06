<template>
  <v-main>
    <v-app-bar 
      app
      dark
    >
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>


      <h1>{{info.saldo}}</h1>

      <v-btn icon>
        <v-icon
          x-large
        >mdi-diamond-stone</v-icon>
      </v-btn>
    <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      temporary
    >
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-row>
        <v-col>
              <h1
                class="titulo-ganhador"
              ></h1>
              <v-btn icon>
                <v-icon
                  x-large
                >mdi-trophy</v-icon>
              </v-btn>
            </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-main>
</template>

<script>
import { getUser } from '../../services/login.service'

export default {
  data(){
    return {
      info: [],
      drawer: null 
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
  .titulo-ganhador{
    text-align: center;
  }
</style>