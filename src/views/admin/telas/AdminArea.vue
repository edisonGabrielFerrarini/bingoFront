<template>
  <v-main
    class="mx-auto my-auto"
  >
    <v-container>
      <v-row>
      <v-col  
      >
        <v-form>
          <v-text-field
            label="email"
            v-model="email"
            :rules="emailRules"
            required
          >
          </v-text-field>  
          <v-text-field
            label="senha"
            v-model="senha"
            type="password"
            :rules="senhaRules"
            required
          >
          </v-text-field>  
        </v-form>
      </v-col>
      </v-row>

    </v-container>
  </v-main>
</template>

<script>
export default {
  data(){
    return {
      email: '',
      emailRules: '',
      senha: '',
      senhaRules: '',
    }
  }

}
</script>

<style>

</style>