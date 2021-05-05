<template>
  <main>
    <button @click="iniciar">iniciar</button>
  </main>
</template>

<script>
import { getUser } from '../../services/login.service'

export default {
  methods: {
    iniciar(){
      console.log('clicou');
      const teste = getUser('egf22@hotmail.com', '123')

      console.log(teste);
    }
  }
}
</script>

<style>
</style>