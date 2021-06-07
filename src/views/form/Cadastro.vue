<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-img
          class="ma-auto"
          height="200"
          width="200"
          src="@/assets/Final.png"
        ></v-img>

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            label="email"
            v-model="payload.email"
            :rules="emailRules"
            required
          >
          </v-text-field>

          <v-text-field
            v-model="payload.senha"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[senhaRules.required, senhaRules.min]"
            :type="show ? 'text' : 'password'"
            name="input-10-1"
            label="Senha"
            hint="minimo de 8 caracteres"
            counter
            @click:append="show = !show"
          ></v-text-field>

          <v-text-field
            label="nome"
            v-model="payload.nome"
            :rules="nomeRules"
            required
          >
          </v-text-field>
          <v-text-field
            label="telefone"
            v-model="payload.telefone"
            :rules="telefoneRules"
            v-mask="'(##) #####-####'"
            required
          >
          </v-text-field>
          <v-text-field
            label="celular"
            v-model="payload.celular"
            v-mask="'(##) #####-####'"
            :rules="celularRules"
            required
          >
          </v-text-field>
          <v-text-field
            label="cpf"
            v-model="payload.cpf"
            v-mask="'###.###.###-##'"
            :rules="cpfRules"
            required
          >
          </v-text-field>
          <v-text-field
            label="cidade"
            v-model="payload.cidade"
            :rules="cidadeRules"
            required
          >
          </v-text-field>
          <v-text-field
            label="estado"
            v-model="payload.estado"
            :rules="estadoRules"
            required
          >
          </v-text-field>
        </v-form>
        <div class="text-center">
          <v-btn class="ma-10" @click="submit" color="success">
            Cadastrar
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" top>
      Não foi possivel realizar o cadastro
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { createUser } from "../../services/cartela.service";
export default {
  data() {
    return {
      valid: true,
      show: true,
      snackbar: false,
      payload: {
        email: "",
        senha: "",
        nome: "",
        telefone: "",
        celular: "",
        cpf: "",
        cidade: "",
        estado: "",
      },
      emailRules: [
        (v) => !!v || "E-mail é obrigatório",
        (v) => /.+@.+\..+/.test(v) || "E-mail não é valido",
      ],
      senhaRules: {
        required: (value) => !!value || "Senha é obrigatória.",
        min: (v) => v.length >= 8 || "Mínimo 8 characters",
      },
      nomeRules: [(v) => !!v || "Nome é obrigatório"],
      telefoneRules: [(v) => !!v || "Telefone é obrigatório"],
      celularRules: [(v) => !!v || "Celular é obrigatório"],
      cpfRules: [(v) => !!v || "Cpf é obrigatório"],
      cidadeRules: [(v) => !!v || "Cidade é obrigatório"],
      estadoRules: [(v) => !!v || "Estado é obrigatório"],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.init();
      }
    },

    async init() {
      try {
        await createUser(this.payload);
        this.$router.go(0)
        this.$router.push("/login");
      } catch (e) {
        this.snackbar = true;
      }
    },
  },
};
</script>

<style></style>
