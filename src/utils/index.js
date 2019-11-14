import localStorage from './localStorage'
import apiList from '@/api'
import toast from '@/components/toast/toast'
import des from './DES'
import utils from './utils'

// 将公用方法挂载到Vue的原型上
const install = Vue =>{
  if(install.installed) return
  install.installed = true;
  Object.defineProperties(Vue.prototype,{
    $api:{
      get(){
        return apiList
      }
    },
    $local:{
      get(){
        return localStorage
      }
    },
    $toast:{
      get(){
        return toast
      }
    },
    $des:{
      get(){
        return des
      }
    },
    $utils:{
      get(){
        return utils
      }
    }
  })
}

export default install
