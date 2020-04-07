import axios from '../utils/api'
import qs from 'qs'

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

export const getUserList = (data)=>{
  if(data) data = qs.stringify(data)
  return axios({
    url:'/getUserList?'+data,
    method:'get',
  })
}

export const delUser = (data)=>{
  return axios({
    url:'/delUserById',
    method:'post',
    data:data
  })
}

export const addCategory = (data)=>{
  return axios({
    url:'/addCategory',
    method:'post',
    data:data
  })
}

export const getCategoryList = (data)=>{
  if(data) data = qs.stringify(data)
  return axios({
    url:'/getCategoryList?'+data,
    method:'get'
  })
}

export const delCategory = (data)=>{
  return axios({
    url:'/delCategory',
    method:'post',
    data:data
  })
}

export const categoryDetail = (data)=>{
  return axios({
    url:'/getCategoryDetail',
    method:'post',
    data:data
  })
}

export const addArticle = (data)=>{
  return axios({
    url:'/addArticle',
    method:'post',
    data:data
  })
}

export const getArticleList = (data)=>{
  if(data) data = qs.stringify(data)
  return axios({
    url:'/getArticleList?'+data,
    method:'get'
  })
}

export const getArticleDetail = (data)=>{
  return axios({
    url:'/getArticleDetail',
    method:'post',
    data:data
  })
}

export const addComment = (data)=>{
  return axios({
    url:'/addComment',
    method:'post',
    data:data
  })
}

export const getCommentList = (data)=>{
  if(data) data = qs.stringify(data)
  return axios({
    url:'/getCommentList?'+data,
    method:'get'
  })
}

export const deleteArticle = (data)=>{
  return axios({
    url:'/delArticle',
    method:'post',
    data:data
  })
}

export const updateCategory = (data)=>{
  return axios({
    url:'/updateCategory',
    method:'post',
    data:data
  })
}

export const updateArticle = (data)=>{
  return axios({
    url:'/updateArticle',
    method:'post',
    data:data
  })
}

export const uploads = (data) =>{
  return axios({
    url:'/uploads',
    method:'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  })
}

// 导出全部
export default {
  login,
  register,
  userInfo,
  getUserList,
  delUser,
  addCategory,
  getCategoryList,
  delCategory,
  addArticle,
  getArticleList,
  getArticleDetail,
  addComment,
  getCommentList,
  deleteArticle,
  categoryDetail,
  updateCategory,
  updateArticle,
  uploads
}
