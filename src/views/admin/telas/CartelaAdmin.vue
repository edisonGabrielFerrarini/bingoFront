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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  CANCELAR CARTELA
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
import GerarSorteio from '../../../components/admin/cartela/GerarSorteio.vue'

export default {
  components: { 
    FormCreateCartela,
    GerarSorteio
  },
  data(){
    return {
    }
  },

  

}
</script>

<style>

</style>