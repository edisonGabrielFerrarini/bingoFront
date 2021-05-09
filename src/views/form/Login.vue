<template>
  <v-card
    class="login mx-auto my-auto" 
    flat
  >
  <v-img
      height="250"
      src="@/assets/Final.png"
    ></v-img>
  <v-card-text>
  <form
    class="text-center "
  >
    <v-text-field
      class="mx-2"
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      class="mx-2"
      v-model="password"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show ? 'text' : 'password'"
      name="input-10-1"
      label="Senha"
      hint="At least 8 characters"
      counter
      @click:append="show = !show"
    ></v-text-field>
    <div
      class="mt-4"
    >
      <v-btn
        width="60%"
        @click="submit"
        color="success"
      >
        login
      </v-btn>
    </div>
    <div
      class="mt-5"
    >
      <v-btn
        width="40%"
      >
        Cadastre-se
      </v-btn>
    </div>
  </form>
  </v-card-text>
  </v-card>
</template>

<script>
  import {mapActions} from 'vuex'
  import { getUser } from '../../services/login.service'
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email, password} from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      pass: { required, password },
      email: { required, email },      
    },

    data: () => ({
      email: '',
      password: '',
      show: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        },
    }),

    computed: {
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      
    },

    methods: {
      ...mapActions(['actionInformacoes']),
      
      submit () {
        this.init()
      },


      async init(){
        try{
          const usuario = await getUser(this.email, this.password)
          if(usuario.status === 200){
            this.actionInformacoes(usuario.data)
            this.$router.push('Cliente')
          }
        }catch(e){
          console.log('erro ao consultar usuario');
        }


      }
    },
  }
</script>

<style>
  .login {
    width: 30%;
  }

  @media (min-width: 0) and (max-width: 600px) {
    .login {
      width: 100%;
      top: -30px;
    }
  }

</style>