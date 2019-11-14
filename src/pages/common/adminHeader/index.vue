<template>
  <!--顶部导航条-->
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" to="/admin">后台管理<span class="sr-only">(current)</span></router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><router-link to="/admin/user">用户管理</router-link></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
               aria-expanded="false">分类管理 <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><router-link to="/admin/categoryList">分类管理首页</router-link></li>
              <li><router-link to="/admin/categoryAdd">分类管理添加</router-link></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
               aria-expanded="false">内容管理 <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><router-link to="/admin/articleList">内容管理首页</router-link></li>
              <li><router-link to="/admin/articleAdd">内容管理添加</router-link></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
               aria-expanded="false">工具<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><router-link to="/admin/htmlToMd">html转md</router-link></li>
            </ul>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
               aria-expanded="false">admin<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/">进入前台</router-link>
              </li>
              <li><a @click="removeUser">退出</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: "admin-header",
    methods: {
      ...mapMutations({
        removeUser: 'REMOVE_USER'
      })
    },
  }
</script>

<style scoped>

</style>
