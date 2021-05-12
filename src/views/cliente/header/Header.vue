<template>
  <v-card
    dark
  >
      <v-btn
        right
        absolute
        top
        large
        class="mt-10 btn-hamburguer"
        @click="drawer = !drawer">
      <v-icon
        >mdi-menu</v-icon>
      </v-btn>
      <div class="toolbar">
      <div
        class="container-img"
      >
        <v-img
          src="@/assets/Final.png"
          class="imagem"
          height="150"
          width="150"
        ></v-img>
      </div>
      
      <div class="row mt-10">
        <p class="p-saldo">Saldo</p>
        <div> 
          <v-btn 
          icon>
            <v-icon
            >mdi-diamond-stone</v-icon>
          </v-btn>
          <h1 class="saldo">{{getInformacoes.saldo}}</h1>  
          <v-btn icon>
            <v-icon
              >mdi-diamond-stone</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      temporary
    >
      <v-list
        nav
        dense
        class="text-center mt-12"
      >
        <v-list-item-group
        >

        <router-link to="cartela">
          <v-list-item
            class="py-3"
          >
            <v-list-item-title>
                Cartela
            </v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link to="dados">
          <v-list-item
            class="py-3"
          >
            <v-list-item-title>Meus Dados</v-list-item-title>
          </v-list-item>
        </router-link>
          
        <router-link to="tickets">
          <v-list-item
            class="py-3"
          >
            <v-list-item-title>
              Meus Tickets
            </v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link to="ganhadores">
          <v-list-item
            class="py-3"
          >
            <v-list-item-title>Ganhadores</v-list-item-title>
          </v-list-item>
        </router-link>

          <v-list-item
            class="py-3"
          >
            <v-list-item-title @click="sair()">Sair</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </v-card>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  components: {
  },
  computed: {
    ...mapGetters(['getInformacoes'])
  },
  data(){
    return {
      drawer: false 
    }
  },
  methods: {
    sair(){
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>

  a {
     text-decoration: none;
 }

  .imagem-logo {
    width: 30%;
    height: 30%;
    border: 1px solid black;
  }

  .saldo {
    display: inline;
    position: relative;
    top: 8%;
  }

  .p-saldo {
    position: absolute;
    top: 40%;
  }

  .toolbar {
    display: flex;
    flex-direction: column;
    height: 150px;
    text-align: right;
  }

  .row {
    display: flex;
    width: 100%;
    justify-content: center;
    align-content: center;
  }

  .container-img {
    position: absolute;
    left: 5%;
  }

  .btn-hamburguer{
    z-index: 1;
  }

  @media (min-width: 0) and (max-width: 600px) {
    .container-img {
      width: 100%;
      height: 30px;
      position: absolute;
      top: -30px;
      left: 0;
    }

    .p-saldo {
      position: absolute;
      top: 25%;
    }

    .row {
      position: relative;
      top: 20px;
    }
  }

</style>