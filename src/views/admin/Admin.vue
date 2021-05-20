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
        <div>{{getEmail.split("@")[0]}}</div>
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


        <a
          @click="sair()"
        >
          <v-list-item> 
            <v-list-item-icon>
              <v-icon>mdi-exit-run</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Sair</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </a>
      </v-list>  
    </v-navigation-drawer>

    <router-view />
    
  </v-app>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import { getUserAdmin } from '../../services/login.service'
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
        ['mdi-exit-run', ]
      ],
    }),
    methods: {
      ...mapActions(['actionEmail']),

      sair(){
        localStorage.clear()
        this.$router.push('/login_admin')
      }
    },
    computed: {
      ...mapGetters(['getEmail'])
    },
    async created(){
      if(localStorage.getItem('userAdmin') && localStorage.getItem('passAdmin')){
        const admin = await getUserAdmin(localStorage.getItem('user'), localStorage.getItem('pass'))
        console.log(admin);
          if(admin.status === 200){
            this.actionEmail(admin.data)
          }
        }
      if(this.getEmail == null){
        this.$router.push('LoginAdmin')
      }
    },
  }
</script>
<style>

</style>