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
                  BUSCAR POR ID
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  
                  <v-form>
                    <v-row>
                      <v-col
                        cols="10"
                      >
                        <v-text-field
                          label="ID"
                        ></v-text-field>                        
                      </v-col>
                      <v-col>
                        <v-btn>
                          Buscar
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>

                  <v-form>
                    <v-text-field
                      label="NOME"
                      disabled
                    ></v-text-field>  
                  </v-form>

                  <v-row>
                    <v-col cols="6">
                      <v-expansion-panels>
                        <v-expansion-panel>
                          <v-expansion-panel-header>
                            INSERIR SALDO
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <v-form>
                              <v-text-field
                                label="INSERIR"
                              ></v-text-field>  
                              <div class="text-center">
                                <v-btn>
                                  INSERIR
                                </v-btn>
                              </div>
                            </v-form>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-col>
                    <v-col cols="6">
                      <v-expansion-panels>
                        <v-expansion-panel>
                          <v-expansion-panel-header>
                            DEBITAR SALDO
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <v-form>
                              <v-text-field
                                label="DEBITAR"
                              ></v-text-field> 
                              <div class="text-center">
                                <v-btn>
                                  DEBITAR
                                </v-btn>
                              </div> 
                            </v-form>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-col>   
                  </v-row>

                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

           <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  BUSCAR POR CPF
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  
                  <v-form>
                    <v-row>
                      <v-col
                        cols="10"
                      >
                        <v-text-field
                          label="CPF"
                        ></v-text-field>                        
                      </v-col>
                      <v-col>
                        <v-btn>
                          Buscar
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>

                  <v-form>
                    <v-text-field
                      label="NOME"
                      disabled
                    ></v-text-field>  
                  </v-form>

                  <v-row>
                    <v-col cols="6">
                      <v-expansion-panels>
                        <v-expansion-panel>
                          <v-expansion-panel-header>
                            INSERIR SALDO
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <v-form>
                              <v-text-field
                                label="INSERIR"
                              ></v-text-field>
                              <v-col>
                              <div class="text-center">
                                <v-btn>
                                  INSERIR
                                </v-btn>
                              </div>
                              </v-col>
                            </v-form>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-col>
                    <v-col cols="6">
                      <v-expansion-panels>
                        <v-expansion-panel>
                          <v-expansion-panel-header>
                            DEBITAR SALDO
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <v-form>
                              <v-text-field
                                label="DEBITAR"
                              ></v-text-field>  
                              <div class="text-center">
                                <v-btn>
                                  DEBITAR
                                </v-btn>
                              </div>
                            </v-form>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-col>   
                  </v-row>

                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>

export default {
  components: { 
  },
  data(){
    return {
    }
  },

  

}
</script>

<style>

</style>