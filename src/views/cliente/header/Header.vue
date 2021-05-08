<template>
  <v-card
  >
    <v-toolbar
      dark
      flat
    >
      <v-toolbar-title>
        Game da Sena
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-toolbar>
    
    <v-toolbar
      flat
      dark
      height="100%"
    >
    <v-row
      justify="center"
      class="mt-10"
    > 
    <div>
      <p class="my-0 ma-0 mr-10 text-center">Saldo </p>
      <h1
        class="pr-10 pb-10"
      >
        <v-btn icon>
          <v-icon
            x-large
          >mdi-diamond-stone</v-icon>
        </v-btn>
        1000{{saldo}}
        <v-btn icon>
          <v-icon
            x-large
          >mdi-diamond-stone</v-icon>
        </v-btn>
      </h1>
    </div>
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
    saldo: Number
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