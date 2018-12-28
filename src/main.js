// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css'
import '@/assets/css/comment.css'
import store from './store/index'
import api from './utils/index'

// 引入jquery
import $ from 'jquery'

// 引入bootstrap
import '@/assets/bootstrap/js/bootstrap.min.js'
import '@/assets/bootstrap/css/bootstrap.css'

// 将工具方法挂载到Vue上
Vue.use(api)

Vue.config.productionTip = false

// 自定义指令
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
