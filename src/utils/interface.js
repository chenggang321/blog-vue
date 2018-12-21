import axios from './api'
// 统一的接口文件
export const getUser = (data)=>{
  return axios({
    url:'/user.json',
    method:'get',
    data:data,
    type:'json'
  })
}

// 导出全部
export default {
  getUser
}
