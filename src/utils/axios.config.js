export default {
  method:'get',
  baseURL:'/api',
  headers:{
    'Content-Type': 'application/json;charset=UTF-8'
  },
  data:{},
  // 超时时间
  timeout:10000,
  // 携带凭证
  withCredentials:true,
  // 返回数据类型
  responseType:'json'
}
