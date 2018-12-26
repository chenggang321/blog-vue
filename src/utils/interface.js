import axios from './api'
// 统一的接口文件
export const login = (data)=>{
  return axios({
    url:'/login',
    method:'post',
    data:data,
    type:'json'
  })
}

export const register = (data)=>{
  return axios({
    url:'/register',
    method:'post',
    data:data,
    type:'json'
  })
}

export const userInfo = ()=>{
  return axios({
    url:'/userInfo',
    method:'post'
  })
}

// 导出全部
export default {
  login,
  register,
  userInfo
}
