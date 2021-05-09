<template>
  <v-card
    dark
  >
    <div class="toolbar">
      <div
        class="btn-hamburguer"
      >
        <v-btn @click="drawer = !drawer">
          <v-icon
          >mdi-menu</v-icon>
        </v-btn>
      </div>

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
      
      <div class="row">
        <p class="p-saldo">Saldo</p>
        <div> 
          <v-btn 
          icon>
            <v-icon
              x-large
            >mdi-diamond-stone</v-icon>
          </v-btn>
          <h1 class="saldo">{{getInformacoes.saldo}}</h1>  
          <v-btn icon>
            <v-icon
              x-large
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

}
</script>

<style>
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
    position: relative;
    top: 40%;
    right: 2%; 
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