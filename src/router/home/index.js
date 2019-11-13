export default {
  path: '/home',
  name: 'home',
  components: {
    layout:()=>import('@/pages/common/layout'),
    default:() => import('@/pages/home')
  },
  redirect: '/home/list',
  children: [
    {
      path: 'list',
      name: 'list',
      component: () => import('@/pages/home/list'),
      meta: {
        auth: true,
        title: '列表'
      }
    },
    {
      path:'articleDetail/:id',
      name:'articleDetail',
      component:() => import('@/components/detail/detail'),
      meta: {
        auth: true,
        title: '详情'
      }
    },
  ]
}
