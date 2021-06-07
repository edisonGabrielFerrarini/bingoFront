import axios from 'axios'

const config = {
  headers: {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  },
  withCredentials: false,
  auth: {
    username: localStorage.getItem('user'),
    password: localStorage.getItem('pass')
  },
  server: 'https://app-back-game-sena.herokuapp.com'
}

async function createUser(payload){
  console.log(payload);
  return axios.post(config.server + '/api/users/cadastro',
    {       
      'senha': payload.senha,
      'email': payload.email,
      'cliente': {
        'nome': payload.nome,
        'telefone': payload.telefone,
        'celular': payload.celular,
        'cidade': payload.cidade,
        'estado': payload.estado,
        'cpf': payload.cpf.replaceAll(".","").replaceAll("-",""),
        'ganhos': 0,
        'saldo': 0
    }
    }, 
    {
      withCredentials: config.withCredentials,
      headers: config.headers,
    }
  ).then((result) => {
    return result.data
  })
}

async function getCartela(){
  console.log(localStorage.getItem('user'));
  return axios.get(config.server + '/api/cartela', 
    {
      withCredentials: config.withCredentials,
      headers: config.headers,
      auth: config.auth
    }
  ).then((result) => {
    return result.data
  })
}

async function postTicket(id_cliente, numeros){
  return axios.post(config.server + '/api/ticket', {
    'id_cliente': id_cliente,
    'numeros': `[${numeros.toString()}]`
  },
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  })
}

async function getTicketAtivo(id_cliente){
  return axios.get(config.server + `/api/ticket/busca/ativo/${id_cliente}`,
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }).then((result) => {
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

async function getTicketTodos(id_cliente){
  return axios.get(config.server + `/api/ticket/busca/${id_cliente}`,
  {
    withCredentials: config.withCredentials,
    headers: config.headers,
    auth: config.auth
  }).then((result) => {
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

export {
  getCartela,
  postTicket,
  getTicketAtivo,
  getTicketTodos,
  getGanhadores,
  ultimosSorteios,
  createUser
}