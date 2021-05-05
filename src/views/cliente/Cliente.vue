<template>
  <main>
    {{info}}
  </main>
</template>

<script>
import { getUser } from '../../services/login.service'

export default {
  data(){
    return {
      info: []
    }
  },
  created(){
    this.init()
  },
  methods: {
    async init(){
      const usuario = await getUser('egf22@hotmail.com', '123')
      this.info = usuario
    }
  }
}
</script>

<style>

</style>