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
          <v-expansion-panel-header>CADASTRAR AGENTE</v-expansion-panel-header>
          <v-expansion-panel-content>
            <AgenteForm />
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>BUSCAR AGENTE</v-expansion-panel-header>
          <v-expansion-panel-content>
            <BuscarAgente />
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>BUSCAR TODOS OS AGENTES</v-expansion-panel-header>
          <v-expansion-panel-content>
            <TodosAgentes />
          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-expansion-panels>
    </v-container>
  </v-main>
</template>

<script>
import AgenteForm from '../../../components/admin/agente/FormCadastro'
import BuscarAgente from '../../../components/admin/agente/BuscarAgente'
import TodosAgentes from '../../../components/admin/agente/TodosAgentes'
export default {
  components: {
    AgenteForm,
    BuscarAgente,
    TodosAgentes
  },
  data(){
    return {
      panel: [1]

    }
  }
}
</script>

<style>

</style>