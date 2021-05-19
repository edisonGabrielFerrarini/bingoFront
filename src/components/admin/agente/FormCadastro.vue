<template>
  <v-container>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-row>
        <v-col
          cols="12"
        >
          <v-text-field
            label="nome"
            v-model="nome"
            :rules="nomeRules"
            required
          >
          </v-text-field>  
        </v-col>
    
        <v-col
          cols="12"
        >
          <v-text-field
            label="telefone"
            v-model="telefone"
            required
          >
          </v-text-field>  
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="celular"
            v-model="celular"
            :rules="celularRules"
            required
          >
          </v-text-field>  
        </v-col>

        <v-col cols="12">
          <v-text-field
            label="cpf"
            v-model="cpf"
            :rules="cpfRules"
            v-mask="'###.###.###-##'"
            required
          >
          </v-text-field>  
        </v-col>

        <v-col cols="12">
          <v-text-field
            label="cidade"
            v-model="cidade"
            :rules="cidadeRules"
            required
          >
          </v-text-field>  
        </v-col>

        <v-col cols="12">
          <v-text-field
            label="estado"
            v-model="estado"
            :rules="estadoRules"
            required
          >
          </v-text-field>
        </v-col>
        
        <v-col cols="12">
          <v-text-field
            label="id Gerente"
            v-model="id_gerente"
            :rules="id_gerenteRules"
            required
          >
          </v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="text-center">
          <v-btn
            height="50"
            color="success"
            @click="enviar()"
          >
            Enviar
          </v-btn>
        </v-col>
      </v-row>
    </v-form>

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
import {formAgente} from '../../../services/admin.service'

export default {

  data(){
    return {
      dialog: {
        ativar: false,
        text: '',
        icon: '',
        color: ''
      },
      valid: true,
      nome: '',
      nomeRules: [
        v => !!v || 'Nome é obrigatório',
      ],
      telefone: '',
      celular: '',
      celularRules: [
        v => !!v || 'Celular é obrigatório',
      ],
      cpf: '',
      cpfRules: [
        v => !!v || 'CPF é obrigatório',
      ],
      estado: '',
      estadoRules: [
        v => !!v || 'Estado é obrigatório',
      ],
      cidade: '',
      cidadeRules: [
        v => !!v || 'Cidade é obrigatório',
      ],
      id_gerente: '',
      id_gerenteRules: [
        v => !!v || 'Id do gerente é obrigatório',
      ]
    }
  },
  methods: {
    async enviar(){
      try {
        if(this.$refs.form.validate()){
          const payload = {
            nome: this.nome,
            telefone: this.telefone,
            cpf: this.cpf.replaceAll(".","").replaceAll("-",""),
            celular: this.celular,
            estado: this.estado,
            cidade: this.cidade,
            id_gerente: this.id_gerente
          }
          await formAgente(payload)

          this.dialog.ativar = true
          this.dialog.text = "Agente salvo com Sucesso"
          this.dialog.icon = "mdi-thumb-up"
          this.dialog.color = 'success'

          this.$refs.form.reset()
          this.$refs.form.resetValidation()
        }
      }catch(e){
        this.dialog.ativar = true
        this.dialog.text = "Erro ao salvar agente"
        this.dialog.icon = "mdi-thumb-down"
        this.dialog.color = 'error'
      }
    }
  }

}
</script>

<style>

</style>