import axios from 'axios'
import {
  Message
} from 'element-ui'
// import store from '../store'
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  // baseURL: '/api_test', // api的base_url
  baseURL: process.env.API_LOCATION, // api的base_url
  timeout: 30000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // config.headers['Content-Type'] = 'multipart/form-data'
  config.headers['Content-Type'] = 'application/json'
  /*
  if (firebase.auth().currentUser) {
    return firebase.auth().currentUser.getIdToken().then(function (token) {
      config.headers['Authorization'] = token;
      return config;
    })
  } else {
    return config;
  }
  */
  return config;
}, error => {
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(res => {
    return res
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error'
    })
    return Promise.reject(error)
  }
)

export default service
