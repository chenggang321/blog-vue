import axios from 'axios'
import config from './axios.config'
import store from '@/store/index'
import toast from '@/components/toast/toast'
import qs from 'qs'
// 封装axios
export default function $axios(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseURL,
      headers: {},
      timeout: config.timeout
    })

    // request 拦截器
    instance.interceptors.request.use(config => {
      // 加入loading动画
      store.commit('LOADING_SHOW')
      // console.log(config)
      //POST请求对数据格式化 上传文件时不做处理
      if(config.headers['Content-Type'] !== 'multipart/form-data'){
        let data = config.data;
        config.data = qs.stringify(data);
      }
      return config
    }, error => {
      // console.log('request Error',error.response)
      //重定向到错误页面
      return Promise.reject(error.response)
    })

    // response 拦截器
    instance.interceptors.response.use(response => {
      store.commit('LOADING_HIDE')
      return response
    }, error => {
      // 关闭loading动画
      store.commit('LOADING_HIDE')
      return Promise.reject(error)
    })

    // 统一处理请求和错误
    instance(options).then(res => {
      resolve(res)
      return false
    }).catch(error => {
      if(error){
        if (error.response) {
          switch (error.response.status) {
            case 404:
              toast({
                hasIcon: true,
                message: '请求接口不存在！'
              })
              break
            case 500:
              toast({
                hasIcon:true,
                message:'服务器正忙!'
              })
          }
        }else{
          toast({
            hasIcon: true,
            message: '发生错误：' + error.toString().substring(6)
          })
        }
      }
      reject(error)
    })
  })
}

