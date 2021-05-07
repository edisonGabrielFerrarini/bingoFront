<template>
  <div>
      PREMIAÇÃO
    <h1>
      <v-btn icon>
        <v-icon
          color="yellow"
          x-large
        >
          mdi-trophy
        </v-icon>
      </v-btn>
        {{ valor }}
      <v-btn icon>
        <v-icon
          color="yellow"
          x-large
        >
          mdi-trophy
        </v-icon>
      </v-btn>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    valor: String
  }
}
</script>

<style>

</style>