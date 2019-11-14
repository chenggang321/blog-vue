export default   {
  path: '/admin',
  name: 'admin',
  components:{
    layout: () => import('@/pages/common/adminLayout'),
    default:() => import('@/pages/admin')
  },
  redirect: '/admin/index',
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('@/pages/admin/home'),
      meta: {
        auth: true,
        title: '首页'
      }
    },
    {
      path: 'user',
      name: 'user',
      component: () => import('@/pages/admin/user/list'),
      meta: {
        auth: true,
        title: '用户管理'
      }
    },
    {
      path: 'categoryList',
      name: 'categoryList',
      component: () => import('@/pages/admin/category/list'),
      meta: {
        auth: true,
        title: '分类列表'
      }
    },
    {
      path: 'categoryAdd',
      name: 'categoryAdd',
      component: () => import('@/pages/admin/category/add'),
      meta: {
        auth: true,
        title: '分类添加'
      }
    },
    {
      path: 'articleAdd',
      name: 'articleAdd',
      component: () => import('@/pages/admin/article/add'),
      meta: {
        auth: true,
        title: '文章添加'
      }
    },
    {
      path: 'articleList',
      name: 'articleList',
      component: () => import('@/pages/admin/article/list'),
      meta: {
        auth: true,
        title: '文章列表'
      }
    },
    {
      path: 'categoryEdit/:id',
      name: 'categoryEdit',
      component: () => import('@/pages/admin/category/edit'),
      meta: {
        auth: true,
        title: '详情'
      }
    },
    {
      path: 'articleEdit/:id',
      name: 'articleEdit',
      component: () => import('@/pages/admin/article/edit'),
      meta: {
        auth: true,
        title: '文章编辑'
      }
    },
    {
      path: 'htmlToMd',
      name: 'htmlToMd',
      component: ()=> import('@/pages/admin/tools/htmlToMd'),
      meta: {
        auth: true,
        title: '工具'
      }
    }
  ]
}
