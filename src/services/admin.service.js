import axios from 'axios'

const config = {
  headers: {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers':'*'
  },
  withCredentials: false,
  auth: {
    username: 'adminGameSena@Hotmail.com.br',
    password: '0f1324de378fb2e399bc66843abb736ca47eb638b6a05bacb23a82efb5ffd62b'
  },
  server: 'https://app-back-game-sena.herokuapp.com:59191'
}

async function createCartela(cartela){
  return axios.post(config.server + '/api/cartela',
  {
    'numeros_sorteados': cartela.numeros_sorteados,
    'ativa': cartela.ativa,
    'valor': cartela.valor,
    'valor_numero': cartela.valor_numero,
    'valor_porcentagem': cartela.valor_porcentagem
  }, 
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }
  ).then((result) => {
    return result.data
  })
}

async function sorteia(numeros){
  return axios.post(config.server + '/api/cartela/sorteia', 
  {
    'numeros': `[${numeros.toString()}]`
  },
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }
  ).then((result) => {
    return result.data
  })
}

async function getClienteById(id){
  return axios.get(config.server + `/api/cliente/admin/busca/${id}`, 
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }
  ).then((result) => {
    return result.data
  })
}

async function getByCpf(cpf){
  return axios.get(config.server + `/api/cliente/admin/busca/cpf/${cpf}`, 
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }
  ).then((result) => {
    return result.data
  })
}


async function updateSaldo(id, saldo){
  return axios.put(config.server + `/api/cliente/update/saldo/${id}`,
  {
    'saldo': saldo
  }, 
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }
  ).then((result) => {
    return result.data
  })
}

async function debitarSaldo(id, saldo){
  return axios.put( config.server + `/api/cliente/debita/saldo/${id}`, 
  {
    'saldo': saldo
  }, 
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }
  ).then((result) => {
    return result.data
  })
}

async function obterCartelaAtiva(){
  return axios.get(config.server + '/api/cartela/rendimento', 
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }
  ).then((result) => {
    return result.data
  })
}

async function cancelarCartela(){
  return axios.get(config.server + '/api/cartela/cancela', 
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }
  ).then((result) => {
    return result.data
  })
}

async function ultimosSorteios(){
  return axios.get(config.server + '/api/cartela/ultimo', 
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }
  ).then((result) => {
    return result.data
  })
}

async function todosOsSorteios(){
  return axios.get(config.server + '/api/cartela/all?sort=id,desc', 
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }
  ).then((result) => {
    return result.data
  })
}

async function getAllAgentes(){
  return axios.get(config.server + '/api/agente', 
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }
  ).then((result) => {
    return result.data
  })
}

async function getAllGanhadores(){
  return axios.get(config.server + `/api/ganhador?sort=id,desc`,
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }).then((result) => {
    return result.data
  })
}

async function getAllGerentes(){
  return axios.get(config.server + '/api/gerente', 
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }
  ).then((result) => {
    return result.data
  })
}

async function getGanhadores(){
  return axios.get(config.server + `/api/ganhador?sort=id,desc`,
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }).then((result) => {
    return result.data
  })
}

async function formGerente(gerente){
  return axios.post(config.server + '/api/gerente',
  {
    'nome': gerente.nome,
    'telefone': gerente.telefone,
    'celular': gerente.celular,
    'cpf': gerente.cpf,
    'cidade': gerente.cidade,
    'estado': gerente.estado
  }, 
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }
  ).then((result) => {
    return result.data
  })
}

async function formAgente(agente){
  return axios.post(config.server + '/api/agente',
  {
    'nome': agente.nome,
    'telefone': agente.telefone,
    'celular': agente.celular,
    'cpf': agente.cpf,
    'cidade': agente.cidade,
    'estado': agente.estado,
    'id_gerente': agente.id_gerente,
    'porcentual_venda': 0
  }, 
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }
  ).then((result) => {
    return result.data
  })
}

async function getGerenteById(id){
  return axios.get(config.server + `/api/gerente/id/${id}`, 
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }
  ).then((result) => {
    return result.data
  })
}

async function getGerenteByCPF(cpf){
  return axios.get(config.server + `/api/gerente/cpf/${cpf}`, 
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }
  ).then((result) => {
    return result.data
  })
}

async function getAgenteByCPF(cpf){
  return axios.get(config.server + `/api/agente/cpf/${cpf}`, 
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }
  ).then((result) => {
    return result.data
  })
}

async function getAgenteById(id){
  return axios.get(config.server + `/api/gerente/id/${id}`, 
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }
  ).then((result) => {
    return result.data
  })
}

export {
  createCartela,
  sorteia,
  getClienteById,
  updateSaldo,
  debitarSaldo,
  obterCartelaAtiva,
  cancelarCartela,
  ultimosSorteios,
  todosOsSorteios,
  getGanhadores,
  getByCpf,
  formGerente,
  formAgente,
  getGerenteByCPF,
  getGerenteById,
  getAgenteByCPF,
  getAgenteById,
  getAllGerentes,
  getAllAgentes,
  getAllGanhadores
}