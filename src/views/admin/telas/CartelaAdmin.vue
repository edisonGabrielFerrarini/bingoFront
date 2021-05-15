<template>
  <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row
        >
          <v-col
            class="mt-12"
          >
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  GERAR CARTELA
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <FormCreateCartela />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  GERAR SORTEIO
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <GerarSorteio />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  CARTELA ATIVA
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <CartelaAtiva />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  CANCELAR CARTELA
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <CancelarCartela />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  ÚLTIMOS SORTEIOS
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <UltimosSorteios />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  TODOS SORTEIOS
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <TodosSorteios />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
import FormCreateCartela from '../../../components/admin/cartela/FormCreateCartela.vue'
import CartelaAtiva from '../../../components/admin/cartela/VerificaAtiva'
import GerarSorteio from '../../../components/admin/cartela/GerarSorteio.vue'
import CancelarCartela from '../../../components/admin/cartela/CancelarCartela.vue'
import UltimosSorteios from '../../../components/admin/cartela/UltimosSorteios.vue'
import TodosSorteios from '../../../components/admin/cartela/TodosSorteios.vue'

export default {
  components: { 
    FormCreateCartela,
    CartelaAtiva,
    GerarSorteio,
    CancelarCartela,
    UltimosSorteios,
    TodosSorteios
  },
  data(){
    return {
    }
  },

  

}
</script>

<style>

</style>