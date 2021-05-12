import axios from 'axios'

async function getUser(email, pass){
  var emailCliente = null  
  var passCliente = null

  if(localStorage.getItem('user') && localStorage.getItem('pass')){
    emailCliente = localStorage.getItem('user')
    passCliente = localStorage.getItem('pass')
  }else {
    emailCliente = email
    passCliente = pass
  }
  
  
  return axios.post('http://192.168.0.11:8080/api/users/login',{
    'email': emailCliente
  },
  {
      withCredentials: false,
      headers: {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      },
      auth: {
        username: emailCliente,
        password: passCliente
      }
    }
  ).then((result) => {
    return result
  })
}

export {
  getUser
}