import Vue from 'vue'
import Router from 'vue-router'
import localStorage from '@/utils/localStorage'
import {loginUser} from '@/config/localStorage.config'
import Home from './home'
import Admin from './admin'


Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/pages/register')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  },
  Home,
  Admin,
  {
    path:'/chat',
    name:'chat',
    component:()=>import('@/pages/chat'),
    meta:{
      auth:true,
      title:'chat'
    }
  },
  {
    path: '/*',
    redirect: '/home'
  }
]

const router = new Router({
  routes: routes
})

// 全局路由守卫
// 路由变化之前
// router.beforeEach((to, form, next) => {
//   const username = localStorage.get(loginUser)
//   // 登陆后直接首页
//   if (to.path === '/login') {
//     if (username) {
//       router.push('/home')
//     }
//   }
//   next()
// })
// // 路由变化之后
// router.afterEach((to) => {
//   const username = localStorage.get(loginUser)
//   // 未登录跳转登录页
//   if (!username && to.path !== '/login') {
//     //router.push('/login')
//   }
// })

export default router
