<template>
  <v-container>
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
      <v-text-field
        label="nome"
        v-model="nome"
        :rules="nomeRules"
        required
      >
      </v-text-field>  
      <v-text-field
        label="telefone"
        v-model="telefone"
        :rules="telefoneRules"
        required
      >
      </v-text-field>  
      <v-text-field
        label="celular"
        v-model="celular"
        :rules="celularRules"
        required
      >
      </v-text-field>  
      <v-text-field
        label="cpf"
        v-model="cpf"
        :rules="cpfRules"
        required
      >
      </v-text-field>  
      <v-text-field
        label="cidade"
        v-model="cidade"
        :rules="cidadeRules"
        required
      >
      </v-text-field>  
      <v-text-field
        label="estado"
        v-model="estado"
        :rules="estadoRules"
        required
      >
      </v-text-field>  
    </v-form>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      email: '',
      emailRules: '',
      senha: '',
      senhaRules: '',
      nome: '',
      nomeRules: '',
      telefone: '',
      telefoneRules: '',
      celular: '',
      celularRules: '',
      cpf: '',
      cpfRules: '',
      cidade: '',
      cidadeRules: '',
      estado: '',
      estadoRules: ''
    }
  }

}
</script>

<style>

</style>