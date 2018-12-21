import Vue from 'vue'
import Router from 'vue-router'
import localStorage from '@/utils/localStorage'
import {loginUser} from '@/config/localStorage.config'

// 缓存路由
const Login = () => import('@/pages/login')
const Home = () => import('@/pages/home')
const List = () => import('@/components/list/list')
const Msg = () => import('@/components/msg/msg')
const My = () => import('@/components/my/my')
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/home/list',
    children: [
      {
        path: 'list',
        name: 'list',
        component: List,
        meta: {
          auth: true,
          title: '列表'
        }
      }, {
        path: 'msg',
        name: 'msg',
        component: Msg,
        meta: {
          auth: true,
          title: '信息'
        }
      }, {
        path: 'my',
        name: 'my',
        component: My,
        meta: {
          auth: true,
          title: '我的'
        }
      }
    ]
  },
  {
    path: '/*',
    redirect: '/login'
  }
]

const router = new Router({
  routes: routes
})

// 全局路由守卫
// 路由变化之前
router.beforeEach((to, form, next) => {
  const username = localStorage.get(loginUser)
  // 登陆后直接首页
  if (to.path === '/login') {
    if (username) {
      router.push('/home')
    }
  }
  next()
})
// 路由变化之后
router.afterEach((to) => {
  const username = localStorage.get(loginUser)
  // 未登录跳转登录页
  if (!username && to.path !== '/login') {
    router.push('/login')
  }
})

export default router
