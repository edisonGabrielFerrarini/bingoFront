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
            md="12"
          >
            <v-expansion-panels
              :value="panel"
              multiple
            >
              <v-expansion-panel>
                <v-expansion-panel-header>
                  BUSCAR AGENTE
                </v-expansion-panel-header>
                <v-expansion-panel-content>

                  <v-form>
                    <v-radio-group
                      v-model="radioButton"
                      column
                    >
                      <v-row>
                        <v-col
                          md="2"
                          sm="2"
                          lg="2"
                          cols="4"
                        >
                          <v-radio
                            label="ID"
                            color="success"
                            value="id"
                          ></v-radio>
                        </v-col>
                        <v-col
                          cols="3"
                          md="2"
                          sm="2"
                          lg="2" 
                        >
                          <v-radio
                            label="CPF"
                            color="info"
                            value="cpf"
                          ></v-radio>
                        </v-col>
                      </v-row>
                    </v-radio-group>
                    <v-row>
                      <v-col
                        md="10"
                        sm="10"
                        lg="10"
                      >
                        <v-text-field
                          label=""
                          v-model="id"
                        ></v-text-field>                        
                      </v-col>
                      <v-col>
                        <v-btn
                          @click="getById()"
                        >
                          Buscar
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>

                <div v-if="visualizarId">
                  <v-form>
                    <v-row>
                      <v-col>
                        <v-text-field
                          label="NOME"
                          v-model="nome"
                          disabled
                        ></v-text-field>  
                        <v-text-field
                          label="SALDO"
                          v-model="saldoAtual"
                          disabled
                        ></v-text-field>          
                      </v-col>
                    </v-row>
                  </v-form>

                  <v-row>
                    <v-col>
                      <v-expansion-panels>
                        <v-expansion-panel>
                          <v-expansion-panel-header>
                            DEBITAR SALDO
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <v-form>
                              <v-text-field
                                label="DEBITAR"
                                v-model="debitar"
                              ></v-text-field> 
                              <div class="text-center">
                                <v-btn
                                  @click="debitaSaldo()"
                                >
                                  DEBITAR
                                </v-btn>
                              </div> 
                            </v-form>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-col> 
                  </v-row>
                </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            
    <v-dialog
      v-model="dialog.ativar"
      max-width="290"
    >
      <v-card>
        <v-card-text class="pt-10 text-center">
          {{dialog.text}}
        </v-card-text>
        <div
          class="text-center"
        >
          <v-icon
            :color="dialog.color"
          >{{dialog.icon}}</v-icon>
        </div>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red darken-1"
            text
            @click="dialog.ativar = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
import {getClienteById, debitarSaldo, updateSaldo} from '../../../services/admin.service'

export default {
  data(){
    return {
      nome: '',
      radioButton: 'id',
      id: null,
      cpf: null,
      saldo: null,
      debitar: null,
      saldoAtual: 0,
      visualizarId: false,
      visualizarCPF: false,
      dialog: {
        ativar: false,
        text: '',
        icon: '',
        color: ''
      },
      panel: [0]

    }
  },
  methods: {
    async getById(){
      try{
        this.saldo = 0
        this.debitar = 0
        if(this.radioButton === 'id'){
          const response = await getClienteById(this.id)
          this.nome = response.body.nome  
          this.saldoAtual = response.body.saldo  
          this.visualizarId = true
        }
        if(this.radioButton === 'cpf'){
          const response = await getClienteById(this.id)
          this.nome = response.body.nome  
          this.saldoAtual = response.body.saldo  
          this.visualizarId = true
        }
      }catch(e){
        this.visualizarId = false
        this.dialog.ativar = true
        this.dialog.text = 'Nenhum cliente Encontrado'
        this.dialog.icon = 'mdi-thumb-down'
        this.dialog.color = 'error'
      }
    },


    async debitaSaldo(){
      const response = await debitarSaldo(this.id, this.debitar)
      this.saldoAtual = response.body.saldo
    }

  }

}
</script>

<style>

</style>