import axios from 'axios'
// import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://127.0.0.1:8090', // api的base_url
  timeout: 12000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // config.headers['Content-Type'] = 'application/json'
  if (store.getters.token) {
    config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  console.log(error) // for debug
  Promise.reject(error)
})


export default service
