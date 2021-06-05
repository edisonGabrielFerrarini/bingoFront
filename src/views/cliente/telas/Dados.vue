<template>
  <v-row
    justify="center"
  >
    <v-col
      cols="12"
      sm="4"
    >
    <h1 class="text-center mt-10">Meus Dados</h1>
      <v-form 
        action=""
        class="mx-10 mt-10 my-10 form-dados"
      >
        <v-text-field
          label="ID"
          loading
          color="success"
          filled
          readonly
          v-model="getInformacoes.id"
        ></v-text-field>
        <v-text-field
          label="Saldo"
          loading
          readonly
          filled
          color="warning"
          v-model="getInformacoes.saldo"
        ></v-text-field>
        <v-text-field
          label="Nome"
          loading
          readonly
          filled
          color="primary"
          v-model="getInformacoes.nome"
        ></v-text-field>
        <v-text-field
          label="Cidade"
          loading
          readonly
          filled
          color="black"
          v-model="getInformacoes.cidade"
        ></v-text-field>
        <v-text-field
          label="CPF"
          loading
          readonly
          filled
          color="red"
          v-model="getInformacoes.cpf"
        ></v-text-field>
        <v-text-field
          label="Celular"
          loading
          readonly
          filled
          color="yellow"
          v-model="getInformacoes.celular"
        ></v-text-field>
        <v-text-field
          label="Telefone"
          loading
          readonly
          filled
          color="purple"
          v-model="getInformacoes.telefone"
        ></v-text-field>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['getInformacoes'])
  },
}
</script>

<style>
  .form-dados{
    text-align: center;
  }
</style>