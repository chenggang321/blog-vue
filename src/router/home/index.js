export default {
  path: '/home',
  name: 'home',
  component: () => import('@/pages/common/layout/homeLayout'),
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
      component:() => import('@/pages/home/detail'),
      meta: {
        auth: true,
        title: '详情'
      }
    },
  ]
}
