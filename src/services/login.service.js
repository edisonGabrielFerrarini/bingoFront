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



async function getUserAdmin(email, pass){
  var emailAdmin = null  
  var passAdmin = null

  if(localStorage.getItem('userAdmin') && localStorage.getItem('passAdmin')){
    emailAdmin = localStorage.getItem('userAdmin')
    passAdmin = localStorage.getItem('passAdmin')
  }else {
    emailAdmin = email
    passAdmin = pass
  }
  
  return axios.get('http://192.168.0.11:8080/api/users/login_admin',
  {
    withCredentials: false,
    headers: {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    },
    auth: {
      username: emailAdmin,
      password: passAdmin
    }
  }).then((result) => {
    return result
  })
}

export {
  getUser,
  getUserAdmin
}