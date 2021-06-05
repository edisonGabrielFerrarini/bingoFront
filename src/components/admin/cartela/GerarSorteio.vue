<template>
  <v-container>
    <div>
      <p
        class="text-center"
      >
        Digite os números para realizar o sorteio!
      </p>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      > 

        <v-row>
          <v-col
            cols="2"
          >
            <v-text-field
              v-model="numeros_sorteio.numero_um"
              :rules="numeros_sorteio.numeroRules"
              v-mask="'##'"
              required
            >
            </v-text-field>  
          </v-col>

          <v-col
            cols="2"
          >
            <v-text-field
              v-model="numeros_sorteio.numero_dois"
              :rules="numeros_sorteio.numeroRules"
              v-mask="'##'"
              required
            >
            </v-text-field>  
          </v-col>

          <v-col
            cols="2"
          >
            <v-text-field
              v-model="numeros_sorteio.numero_tres"
              :rules="numeros_sorteio.numeroRules"
              v-mask="'##'"
              required
            >
            </v-text-field>  
          </v-col>

          <v-col
            cols="2"
          >
            <v-text-field
              v-model="numeros_sorteio.numero_quatro"
              :rules="numeros_sorteio.numeroRules"
              v-mask="'##'"
              required
            >
          </v-text-field>  
          </v-col>

          <v-col
            cols="2"
          >
            <v-text-field
              v-model="numeros_sorteio.numero_cinco"
              :rules="numeros_sorteio.numeroRules"
              v-mask="'##'"
              required
            >
            </v-text-field>  
          </v-col>

          <v-col
            cols="2"
          >
            <v-text-field
              v-model="numeros_sorteio.numero_seis"
              :rules="numeros_sorteio.numeroRules"
              v-mask="'##'"
              required
            >
            </v-text-field>  
          </v-col>
        </v-row>

      </v-form>
    </div>
    <div
      class="text-center mt-10">
        <v-btn
          height="50"
          color="success"
          @click="sortear()"
        >iniciar sorteio</v-btn>
      </div>

      <v-dialog
        v-model="dialog.ativar"
        max-width="290"
      >
      <v-card class="pt-10">
        <v-card-text class="text-center">
          {{dialog.text}}
        </v-card-text>
        <v-card-text class="text-center">
          {{dialog.ganhadores}}
        </v-card-text>
        <v-card-text class="text-center">
          {{dialog.numeros}}
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
import {sorteia} from '../../../services/admin.service'
export default {
  data(){
    return {
      valid: true,
      numeros_sorteio: {
        numeroRules: [
          v => !!v || 'campo obrigatorio',
        ],
        numero_um: '',
        numero_dois: '',
        numero_tres: '',
        numero_quatro: '',
        numero_cinco: '',
        numero_seis: '',
      },
      info: '',
      numeros: '',
      dialog: {
        ativar: false,
        text: '',
        ganhadores: '',
        numeros: '',
        icon: '',
        color: ''
      },
    }
  },
  methods: {
    async sortear(){
      if(this.$refs.form.validate()){
        try{
            const resultado = await sorteia(
              [
                this.numeros_sorteio.numero_um,
                this.numeros_sorteio.numero_dois,
                this.numeros_sorteio.numero_tres,
                this.numeros_sorteio.numero_quatro,
                this.numeros_sorteio.numero_cinco,
                this.numeros_sorteio.numero_seis,
              ]
            )
            if(resultado === 'Não há cartela ativa'){
              this.dialog.ativar = true
              this.dialog.text = resultado
              this.dialog.icon = 'mdi-thumb-down'
              this.dialog.color = 'red'
            }else if(resultado === 'Não houve ganhadores, sua cartela foi acumulada'){
              this.dialog.ativar = true
              this.dialog.text = resultado
              this.dialog.icon = 'mdi-thumb-down'
              this.dialog.color = 'error'
            }else{
              resultado.map((it)=>{
                this.dialog.ganhadores += ` id: ${it.id_cliente} nome: ${it.nome} \n`
              })
              this.dialog.numeros = `numeros: \n ${resultado[0].numeros.toString().replace('[','').replace(']','')}`
              this.dialog.ativar = true
              this.dialog.text = `Ganhadores`
              this.dialog.icon = 'mdi-thumb-up'
              this.dialog.color = 'success'
          }
        }catch(e){
          this.dialog.ativar = true
          this.dialog.text = 'Não há cartelas'
          this.dialog.ganhadores = ''
          this.dialog.numeros = ''
          this.dialog.icon = 'mdi-thumb-down'
          this.dialog.color = 'error'
        }
      }
    }
  }
}
</script>

<style>

</style>