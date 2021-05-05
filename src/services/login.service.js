import axios from 'axios'

async function getUser(email, pass){
  return axios.get('http://localhost:8080/api/cliente/busca/1', 
    {
      withCredentials: false,
      headers: {
        'Content-Type':  'application/json',
      },
      auth: {
        username: email,
        password: pass
      }
    }
  ).then((result) => {
    result.data.body
  })
}

export {
  getUser
}