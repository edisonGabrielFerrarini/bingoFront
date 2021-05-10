<template>
  <v-snackbar
      v-model="getSnackBarStates.snackbar"
      top
    >
      {{ getSnackBarStates.text }}
      
      <template v-if="getSnackBarStates.sucesso" v-slot:action="{ attrs }">
        <v-btn
          color="blue lighten-2"
          text
          v-bind="attrs"
          @click="fecharSnackBar()"
        >
          <v-icon>mdi-thumb-up</v-icon>
        </v-btn>
      </template>

      <template v-else v-slot:action="{ attrs }">
        <v-btn
          color="red lighten-2"
          text
          v-bind="attrs"
          @click="fecharSnackBar()"
        >
          <v-icon>mdi-thumb-down</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed:{
    ...mapGetters(['getSnackBarStates'])
  },
  methods: {
    ...mapActions(['fecharSnackBar']),

    fecharSnackBar(){
      this.fecharSnackBar(false)
    }
  }

}
</script>

<style>

</style>