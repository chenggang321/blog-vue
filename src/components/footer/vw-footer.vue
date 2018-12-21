<template>
  <footer class="footer">
    <ul class="footer-nav">
      <li
        :class="{active:list===$route.path}"
        @click="changeNav(list)"
      >
        <i class="icon iconfont icon-list"></i>
        <span>列表</span>
      </li>
      <li
        :class="{active:msg===$route.path}"
        @click="changeNav(msg)"
      >
        <i class="icon iconfont icon-msg1"></i>
        <span>信息</span>
      </li>
      <li
        :class="{active:my===$route.path}"
        @click="changeNav(my)"
      >
        <i class="icon iconfont icon-myfill"></i>
        <span>我的</span>
      </li>
    </ul>
  </footer>
</template>

<script>
  import '@/assets/font/iconfont.css'

  export default {
    name: "vwFooter",
    data(){
      return {
        list:'/home/list',
        msg:'/home/msg',
        my:'/home/my'
      }
    },
    methods: {
      changeNav(path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped>
  .footer {
    height: 100px;
    background: #ddd;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .footer-nav {
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
  }

  .footer-nav li {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  .footer-nav li span {
    color: #333;
    font-size: 18px;
  }

  .footer-nav li.active span,
  .footer-nav li.active i {
    color: #f00;
  }

  .icon {
    font-size: 40px;
    color: #333;
    margin-bottom: 4px;
  }
</style>
