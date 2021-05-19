<template>
  <v-main
    class="mt-12"
  >
    <v-container>
      <v-expansion-panels 
        :value="panel"
        multiple
      >
        <v-expansion-panel>
          <v-expansion-panel-header>CADASTRAR GERENTE</v-expansion-panel-header>
          <v-expansion-panel-content>
            <GerenteForm />
          </v-expansion-panel-content>
        </v-expansion-panel>


        <v-expansion-panel>
          <v-expansion-panel-header>BUSCAR GERENTE</v-expansion-panel-header>
          <v-expansion-panel-content>
            <BuscarGenrente />
          </v-expansion-panel-content>
        </v-expansion-panel>
        
        <v-expansion-panel>
          <v-expansion-panel-header>BUSCAR TODOS OS GERENTES</v-expansion-panel-header>
          <v-expansion-panel-content>
            <TodosGerentes />
          </v-expansion-panel-content>
        </v-expansion-panel>
    
      </v-expansion-panels>
    </v-container>
  </v-main>
</template>

<script>
import GerenteForm from '../../../components/admin/gerente/FormCadastro'
import BuscarGenrente from '../../../components/admin/gerente/BuscarGerente'
import TodosGerentes from '../../../components/admin/gerente/TodosGerentes'

export default {
  components: {
    GerenteForm,
    BuscarGenrente,
    TodosGerentes
  },
  data(){
    return {
      panel: [1]
    }
  },
}
</script>

<style>

</style>