import axios from 'axios'

async function getCartela(){
  return axios.get('http://192.168.0.11:8080/api/cartela', 
    {
      withCredentials: false,
      headers: {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers':'*'
      },
      auth: {
        username: localStorage.getItem('user'),
        password: localStorage.getItem('pass')
      }
    }
  ).then((result) => {
    return result.data
  })
}

async function postTicket(id_cliente, numeros){
  return axios.post('http://192.168.0.11:8080/api/ticket', {
    'id_cliente': id_cliente,
    'numeros': `[${numeros.toString()}]`
  },
  {
    withCredentials: false,
    headers: {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    },
    auth: {
      username: localStorage.getItem('user'),
      password: localStorage.getItem('pass')
    }
  })
}

async function getTicket(id_cliente){
  return axios.get(`http://192.168.0.11:8080/api/ticket/busca/${id_cliente}`,
  {
    withCredentials: false,
    headers: {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    },
    auth: {
      username: localStorage.getItem('user'),
      password: localStorage.getItem('pass')
    }
  }).then((result) => {
    return result.data
  })
}

async function getGanhadores(){
  return axios.get(`http://192.168.0.11:8080/api/ganhador`,
  {
    withCredentials: false,
    headers: {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    },
    auth: {
      username: localStorage.getItem('user'),
      password: localStorage.getItem('pass')
    }
  }).then((result) => {
    return result.data
  })
}

export {
  getCartela,
  postTicket,
  getTicket,
  getGanhadores
}