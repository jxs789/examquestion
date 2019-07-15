import axios from 'axios'
import {getToken} from '@/utils/index'

const service = axios.create({
  baseURL: 'http://192.168.1.110:7001/',
  timeout: 5000
});

service.interceptors.request.use(
  config => {
    if(getToken){
      config.headers['authorization']=getToken()
    }
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