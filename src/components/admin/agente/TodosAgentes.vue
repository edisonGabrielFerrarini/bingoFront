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
              <th>
                Id Gerente
              </th>
              <th>
                Nome Gerente
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="dado in dados"
              :key="dado.id"
            >
              <td>{{dado.id}}</td>
              <td>{{dado.nome}}</td>
              <td>{{dado.celular}}</td>
              <td>{{dado.cpf}}</td>
              <td>{{dado.cidade}}</td>
              <td>{{dado.estado}}</td>
              <td>{{dado.id_gerente}}</td>
              <td>{{dado.nome_gerente}}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-row>
  </v-container>
</template>

<script>
import {getAllAgentes} from '../../../services/admin.service'

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
        this.dados = await getAllAgentes()
        this.validar = true
        console.log(this.dados);
      }catch(e){

      }
    }
  }
}
</script>

<style>

</style>