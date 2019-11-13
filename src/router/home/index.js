export default {
  path: '/home',
  name: 'home',
  component: () => import('@/pages/home'),
  redirect: '/home/list',
  children: [
    {
      path: 'list',
      name: 'list',
      component: () => import('@/components/list/list'),
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
