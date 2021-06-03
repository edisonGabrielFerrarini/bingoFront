<template>
  <v-container>
    <v-form
      ref="form"
    >
      <v-text-field
        v-model="valor"
        label="Valor"
        v-mask="'######'"
        :rules="[rules.required]"
        required
      ></v-text-field>
      <v-text-field
        v-model="valor_ticket"
        label="Valor do Ticket"
        v-mask="'####'"
        :rules="[rules.required]"
        required
      ></v-text-field>
      <v-text-field
        v-model="valor_porcentagem"
        label="Valor Porcentagem"
        :rules="[rules.required]"
        v-mask="'##%'"
        required
      ></v-text-field>

      <div class="text-center mt-6">
        <v-btn
          width="100%"
          color="primary"
          @click="enviar()"
        >
          Gerar
        </v-btn>
      </div>
    </v-form>
    <v-dialog
      v-model="dialog.ativar"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Cartela
        </v-card-title>

        <v-card-text class="text-center">
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
import {createCartela} from '../../../services/admin.service'

export default {
  data(){
    return {
      dialog: {
        ativar: false,
        text: '',
        icon: '',
        color: ''
      },
      ativa: true,
      valor: '',
      valor_ticket: '',
      valor_porcentagem: '',
      rules: {
        required: value => !!value || 'Valor é obrigatória.',
      },
    }
  },

  methods: {  
    async enviar(){
      try{
        if(this.$refs.form.validate()){
          const payload = {
            numeros_sorteados: "",
            ativa: true,
            valor: parseInt(this.valor.replace('.', '').replace(',','')),
            valor_numero: parseInt(this.valor_ticket.replace('.', '').replace(',','')),
            valor_porcentagem: parseInt(this.valor_porcentagem.replace('%', ''))
          }
          await createCartela(payload)
          this.dialog.ativar = true
          this.dialog.text = 'Criado com Sucesso'
          this.dialog.icon = 'mdi-thumb-up'
          this.dialog.color = 'green'

          this.$refs.form.reset()
          this.$refs.form.resetValidation()
          
        }
        }catch(e){
          this.dialog.ativar = true
          this.dialog.color = 'red'
          this.dialog.text = 'Erro ao criar Cartela, verifique se já existe alguma cartela ativa'
          this.dialog.icon = 'mdi-thumb-down'
      }
    }
  } 


}
</script>

<style>

</style>