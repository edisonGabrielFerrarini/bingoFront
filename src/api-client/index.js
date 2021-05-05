import axios from 'axios'


const ApiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  withCredentials: true,
})

function setupApiClient(){
  ApiClient.interceptors.request.use(
    (config) => {
      config.credentials = true;
      return config
    }
  )
}

function setupApiClient(){
  ApiClient.interceptors.response.use(
    null,
    (error) => {
      const {response} = error;

      if(response?.status === 401){
        window.location.href = '/';
      }

      return Promise.reject(error)

    }
  )
}

export {
  ApiClient,
  setupApiClient
}

