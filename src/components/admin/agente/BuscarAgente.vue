<template>
  <v-container>
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
                      label="Celular"
                      v-model="celular"
                      disabled
                    ></v-text-field>  
                    <v-text-field
                      label="Estado"
                      v-model="estado"
                      disabled
                    ></v-text-field>  
                             
                  </v-col>
                </v-row>
              </v-form>
            </div>

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
  </v-container>
</template>

<script>
import {getAgenteByCPF, getAgenteById} from '../../../services/admin.service'

export default {
  data(){
    return {
      nome: '',
      celular: '',
      estado: '',
      radioButton: 'id',
      id: null,
      cpf: null,
      debitar: null,
      visualizarId: false,
      visualizarCPF: false,
      dialog: {
        ativar: false,
        text: '',
        icon: '',
        color: ''
      },
      panel: [1]

    }
  },
  methods: {
    async getById(){
      try{
        if(this.radioButton === 'id'){
          const response = await getAgenteById(this.id)
          this.nome = response.nome  
          this.celular = response.celular
          this.estado = response.estado
          this.visualizarId = true
        }
        if(this.radioButton === 'cpf'){
          const response = await getAgenteByCPF(this.id)
          this.nome = response.nome  
          this.celular = response.celular
          this.estado = response.estado
          this.visualizarId = true
        }
      }catch(e){
        this.visualizarId = false
        this.dialog.ativar = true
        this.dialog.text = 'Nenhum agente Encontrado'
        this.dialog.icon = 'mdi-thumb-down'
        this.dialog.color = 'error'
      }
    },
  }

}
</script>

<style>

</style>