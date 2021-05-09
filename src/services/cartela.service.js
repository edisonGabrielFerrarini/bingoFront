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
        username: "adminGameSena@Hotmail.com.br",
        password: "0f1324de378fb2e399bc66843abb736ca47eb638b6a05bacb23a82efb5ffd62b"
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
      username: "adminGameSena@Hotmail.com.br",
      password: "0f1324de378fb2e399bc66843abb736ca47eb638b6a05bacb23a82efb5ffd62b"
    }
  })
}

export {
  getCartela,
  postTicket
}