<template>
  <v-row justify="center">
    <v-btn
      color="primary"
      width="150"
      height="80"
      dark
      @click.stop="dialog = true"
    >
      Comprar
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Use Google's location service?
        </v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red darken-1"
            text
            @click="dialog = false"
          >
            Candelar
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
 export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

<style>

</style>