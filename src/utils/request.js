import axios from 'axios'
<<<<<<< HEAD

const service = axios.create({
  baseURL: 'http://169.254.12.110:7001/',
=======
import {getToken} from '../utils/index'

const service = axios.create({
  baseURL: 'http://169.254.32.130:7001/',
>>>>>>> qbc
  timeout: 5000
});

service.interceptors.request.use(
  config => {
<<<<<<< HEAD
=======
    if(getToken){
      config.headers['authorization']=getToken()
    }
>>>>>>> qbc
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
  }
)

export default service