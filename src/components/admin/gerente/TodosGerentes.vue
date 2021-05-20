<template>
  <v-container>
    <v-row>
      <v-col>
        <div
          class="text-center"
        >
          <v-btn
            color="success"
            width="150"
            height="40"
            @click="buscar()"
          >
            Buscar
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row 
      class="mt-10"
      v-if="validar"
    >
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>
                id
              </th>
              <th>
                Nome
              </th>
              <th>
                Celular
              </th>
              <th>
                cpf
              </th>
              <th>
                Cidade
              </th>
              <th>
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="dado in dados"
              :key="dado.cpf"
            >
              <td>{{dado.id}}</td>
              <td>{{dado.nome}}</td>
              <td>{{dado.celular}}</td>
              <td>{{dado.cpf}}</td>
              <td>{{dado.cidade}}</td>
              <td>{{dado.estado}}</td>
              <td>{{dado.id_gerente}}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-row>
  </v-container>
</template>

<script>
import {getAllGerentes} from '../../../services/admin.service'

export default {
  data(){
    return {
      dados: [],
      validar: false
    }
  },
  methods: {
    async buscar(){
      try {
        const response = await getAllGerentes()
        console.log(response);
        this.dados = response.content
        this.validar = true
      }catch(e){

      }
    }
  }
}
</script>

<style>

</style>