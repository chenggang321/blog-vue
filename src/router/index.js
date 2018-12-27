import Vue from 'vue'
import Router from 'vue-router'
import localStorage from '@/utils/localStorage'
import {loginUser} from '@/config/localStorage.config'

// 缓存路由
const Login = () => import('@/pages/login')
const Register = () => import('@/pages/register')
const Home = () => import('@/pages/home')
const List = () => import('@/components/list/list')
const Msg = () => import('@/components/msg/msg')
const My = () => import('@/components/my/my')
const Admin = () => import('@/pages/admin')
const AdminHome = () => import('@/components/admin-home/admin-home')
const AdminUser = () => import('@/components/admin-user/admin-user')
const AdminCategoryList = () => import('@/components/admin-category/category')
const AdminCategoryAdd = () => import('@/components/admin-category/category-add')
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
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
      },
      {
        path: 'msg',
        name: 'msg',
        component: Msg,
        meta: {
          auth: true,
          title: '信息'
        }
      },
      {
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
    path: '/admin',
    name: 'admin',
    component: Admin,
    redirect: '/admin/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: AdminHome,
        meta: {
          auth: true,
          title: '首页'
        }
      },
      {
        path: 'user',
        name: 'user',
        component: AdminUser,
        meta: {
          auth: true,
          title: '用户管理'
        }
      },
      {
        path: 'categoryList',
        name: 'categoryList',
        component: AdminCategoryList,
        meta: {
          auth: true,
          title: '分类列表'
        }
      },
      {
        path: 'categoryAdd',
        name: 'categoryAdd',
        component: AdminCategoryAdd,
        meta: {
          auth: true,
          title: '分类添加'
        }
      }
    ]
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
