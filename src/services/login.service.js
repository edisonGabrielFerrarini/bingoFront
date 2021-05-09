import axios from 'axios'

async function getUser(email, pass){
  return axios.post('http://192.168.0.11:8080/api/users/login',{
    'email': email
  },
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
    return result
  })
}

export {
  getUser
}