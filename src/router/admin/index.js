export default   {
  path: '/admin',
  name: 'admin',
  component: () => import('@/pages/admin'),
  redirect: '/admin/index',
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('@/components/admin-home/admin-home'),
      meta: {
        auth: true,
        title: '首页'
      }
    },
    {
      path: 'user',
      name: 'user',
      component: () => import('@/components/admin-user/admin-user'),
      meta: {
        auth: true,
        title: '用户管理'
      }
    },
    {
      path: 'categoryList',
      name: 'categoryList',
      component: () => import('@/components/admin-category/category'),
      meta: {
        auth: true,
        title: '分类列表'
      }
    },
    {
      path: 'categoryAdd',
      name: 'categoryAdd',
      component: () => import('@/components/admin-category/category-add'),
      meta: {
        auth: true,
        title: '分类添加'
      }
    },
    {
      path: 'articleAdd',
      name: 'articleAdd',
      component: () => import('@/components/admin-article/article-add'),
      meta: {
        auth: true,
        title: '文章添加'
      }
    },
    {
      path: 'articleList',
      name: 'articleList',
      component: () => import('@/components/admin-article/article'),
      meta: {
        auth: true,
        title: '文章列表'
      }
    },
    {
      path: 'categoryEdit/:id',
      name: 'categoryEdit',
      component: () => import('@/components/admin-category/category-edit'),
      meta: {
        auth: true,
        title: '详情'
      }
    },
    {
      path: 'articleEdit/:id',
      name: 'articleEdit',
      component: () => import('@/components/admin-article/article-edit'),
      meta: {
        auth: true,
        title: '文章编辑'
      }
    },
    {
      path: 'htmlToMd',
      name: 'htmlToMd',
      component: ()=> import('@/components/admin-tools/html-to-md'),
      meta: {
        auth: true,
        title: '工具'
      }
    }
  ]
}
