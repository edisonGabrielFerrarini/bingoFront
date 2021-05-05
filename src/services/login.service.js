import axios from 'axios'

async function getUser(email, pass){
  return axios.get('http://localhost:8080/api/cliente/busca/1', 
    {
      withCredentials: false,
      headers: {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      },
      auth: {
        username: email,
        password: pass
      }
    }
  ).then((result) => {
    return result.data.body
  })
}

export {
  getUser
}