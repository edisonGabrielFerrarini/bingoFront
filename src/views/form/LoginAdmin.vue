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
  <v-form
    class="text-center"
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
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
    </div>
  </v-form>
  </v-card-text>
  <v-snackbar
      v-model="snackbar"
      top
    >
      Usuário ou senha incorretos
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
  import { getUserAdmin } from '../../services/login.service'
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email, password} from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      pass: { required, password },
      email: { required, email },      
    },

    data: () => ({
      snackbar: false,
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'E-mail não é valido',
      ],
      password: '',
      show: false,
      rules: {
        required: value => !!value || 'Senha é obrigatória.',
        min: v => v.length >= 8 || 'Mínimo 8 characters',
        },
    }),


    async created(){
      if(localStorage.getItem('userAdmin') && localStorage.getItem('passAdmin')){
        this.$router.push('admin/cartela-admin')
      }
    },

    methods: {
      submit () {
        if(this.$refs.form.validate()){
          this.init()
        }
      },

      async init(){
        try{
          const usuario = await getUserAdmin(this.email, this.password)
            if(usuario.status === 200){
              localStorage.setItem('passAdmin', this.password)
              localStorage.setItem('userAdmin', this.email)
              this.$router.push('admin/cartela-admin')
            }
        }catch(e){
          this.snackbar = true
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