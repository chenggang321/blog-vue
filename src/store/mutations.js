import * as types from './mutation-types'
import localStorage from '@/utils/localStorage'
import {loginUser} from '@/config/localStorage.config'

export default {
  [types.SET_USER](state,user){
    state.user = user
    localStorage.set(loginUser,user)
  },
  [types.REMOVE_USER](state){
    state.user = null
    localStorage.remove(loginUser)
  },
  [types.LOADING_SHOW](state){
    state.loading = true
  },
  [types.LOADING_HIDE](state){
    state.loading = false
  },
  [types.SET_ARTICLELIST](state,articleList){
    state.articleList = articleList
  },
  [types.SET_CATEGORY](state,category){
    state.category = category
  }
}
