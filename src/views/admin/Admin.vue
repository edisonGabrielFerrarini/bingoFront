<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >
        <div>john@vuetifyjs.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <router-link 
          v-for="[icon, text, rota] in links"
          :to="rota"
          :key="icon"
        >
          <v-list-item> 
            <v-list-item-icon>
              <v-icon>{{icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>  
    </v-navigation-drawer>

    <router-view />
    
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      cards: ['Today'],
      
      drawer: null,
      links: [
        ['mdi-cards-club', 'Cartela', 'cartela-admin'],
        ['mdi-seal', 'Sorteio', 'sorteio'],
        ['mdi-account-settings', 'Clientes', 'clientes'],
        ['mdi-trophy', 'Ganhadores', 'ganhadores'],
        ['mdi-badge-account-horizontal', 'Admins', 'configura'],
        ['mdi-account-tie', 'Gerentes', 'gerente'],
        ['mdi-account-tie-outline', 'Agentes', 'agente'],
      ],
    }),
  }
</script>
<style>

</style>