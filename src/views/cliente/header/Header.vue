<template>
  <v-card
  >
    <v-toolbar
      dark
      flat
    >
      <v-toolbar-title>Game da Sena</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-toolbar>
    
    <v-toolbar
      flat
      dark
    >
    <v-row
      justify="center"
    >
      <h1>
        1000{{saldo}}
        <v-btn icon>
          <v-icon
            x-large
          >mdi-diamond-stone</v-icon>
        </v-btn>
      </h1>
    </v-row>
    </v-toolbar>
    <v-spacer></v-spacer>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      temporary
    >
    </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
  components: {
  },
  props: {
    saldo: String
  },
  data(){
    return {
      drawer: null 
    }
  },

}
</script>

<style>

</style>