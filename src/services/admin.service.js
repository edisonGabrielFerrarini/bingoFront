import axios from 'axios'

async function createCartela(cartela){
  console.log(cartela);
  return axios.post('http://192.168.0.11:8080/api/cartela',
  {
    'numeros_sorteados': cartela.numeros_sorteados,
    'ativa': cartela.ativa,
    'valor': cartela.valor,
    'valor_numero': cartela.valor_numero,
    'valor_porcentagem': cartela.valor_porcentagem
  }, 
  {
    withCredentials: false,
    headers: {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers':'*'
    },
    auth: {
      username: 'adminGameSena@Hotmail.com.br',
      password: '0f1324de378fb2e399bc66843abb736ca47eb638b6a05bacb23a82efb5ffd62b'
    }
  }
  ).then((result) => {
    return result.data
  })
}

async function sorteia(cartela){
  console.log(cartela);
  return axios.get('http://192.168.0.11:8080/api/cartela/sorteia', 
  {
    withCredentials: false,
    headers: {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers':'*'
    },
    auth: {
      username: 'adminGameSena@Hotmail.com.br',
      password: '0f1324de378fb2e399bc66843abb736ca47eb638b6a05bacb23a82efb5ffd62b'
    }
  }
  ).then((result) => {
    return result.data
  })
}

async function getClienteById(id){
  return axios.get(`http://192.168.0.11:8080/api/cliente/admin/busca/${id}`, 
  {
    withCredentials: false,
    headers: {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers':'*'
    },
    auth: {
      username: 'adminGameSena@Hotmail.com.br',
      password: '0f1324de378fb2e399bc66843abb736ca47eb638b6a05bacb23a82efb5ffd62b'
    }
  }
  ).then((result) => {
    return result.data
  })
}

async function updateSaldo(id, saldo){
  return axios.put(`http://192.168.0.11:8080/api/cliente/update/saldo/${id}`,
  {
    'saldo': saldo
  }, 
  {
    withCredentials: false,
    headers: {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers':'*'
    },
    auth: {
      username: 'adminGameSena@Hotmail.com.br',
      password: '0f1324de378fb2e399bc66843abb736ca47eb638b6a05bacb23a82efb5ffd62b'
    }
  }
  ).then((result) => {
    return result.data
  })
}

async function debitarSaldo(id, saldo){
  return axios.put(`http://192.168.0.11:8080/api/cliente/debita/saldo/${id}`, 
  {
    'saldo': saldo
  }, 
  {
    withCredentials: false,
    headers: {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers':'*'
    },
    auth: {
      username: 'adminGameSena@Hotmail.com.br',
      password: '0f1324de378fb2e399bc66843abb736ca47eb638b6a05bacb23a82efb5ffd62b'
    }
  }
  ).then((result) => {
    return result.data
  })
}



async function obterCartelaAtiva(){
  return axios.get('http://192.168.0.11:8080/api/cartela/rendimento', 
  {
    withCredentials: false,
    headers: {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers':'*'
    },
    auth: {
      username: 'adminGameSena@Hotmail.com.br',
      password: '0f1324de378fb2e399bc66843abb736ca47eb638b6a05bacb23a82efb5ffd62b'
    }
  }
  ).then((result) => {
    return result.data
  })
}

async function cancelarCartela(){
  return axios.get('http://192.168.0.11:8080/api/cartela/cancela', 
  {
    withCredentials: false,
    headers: {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers':'*'
    },
    auth: {
      username: 'adminGameSena@Hotmail.com.br',
      password: '0f1324de378fb2e399bc66843abb736ca47eb638b6a05bacb23a82efb5ffd62b'
    }
  }
  ).then((result) => {
    return result.data
  })
}

async function ultimosSorteios(){
  return axios.get('http://192.168.0.11:8080/api/cartela/ultimo', 
  {
    withCredentials: false,
    headers: {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers':'*'
    },
    auth: {
      username: 'adminGameSena@Hotmail.com.br',
      password: '0f1324de378fb2e399bc66843abb736ca47eb638b6a05bacb23a82efb5ffd62b'
    }
  }
  ).then((result) => {
    return result.data
  })
}

async function todosOsSorteios(){
  return axios.get('http://192.168.0.11:8080/api/cartela/all?sort=id,desc', 
  {
    withCredentials: false,
    headers: {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers':'*'
    },
    auth: {
      username: 'adminGameSena@Hotmail.com.br',
      password: '0f1324de378fb2e399bc66843abb736ca47eb638b6a05bacb23a82efb5ffd62b'
    }
  }
  ).then((result) => {
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
      username: 'adminGameSena@Hotmail.com.br',
      password: '0f1324de378fb2e399bc66843abb736ca47eb638b6a05bacb23a82efb5ffd62b'
    }
  }).then((result) => {
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
  getGanhadores
}