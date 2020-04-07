<template>
  <nav class="navbar navbar-default navbar-fixed-top">
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
        <a class="navbar-brand" href="/"><span><img class="logo" src="/static/img/favicon.png" style="margin-top: -5px;"/>&nbsp;</span></a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <form class="navbar-form navbar-left">
          <div class="form-group">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="搜索文章" id="keyWord" name="keyword">
              <span class="input-group-btn">
							<button class="btn btn-default" type="button" id="searchBtn"><span
                class="glyphicon glyphicon-search"></span></button>
						  </span>
            </div>
          </div>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="https://github.com/chenggang321"><span></span>github</a></li>
          <li>
            <a data-toggle="modal" data-target="#loginModal" style="cursor:pointer;" v-if="!userInfo">登录</a>
            <ul class="nav navbar-nav navbar-right" v-else>
              <li class="dropdown" v-model="userInfo">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="false">{{userInfo.username}} <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li v-if="userInfo.type === 0">
                    <router-link to="/admin">进入后台</router-link>
                  </li>
                  <li><a @click="removeUser">退出</a></li>
                </ul>
              </li>
            </ul>
            <modal id="loginModal" title="登录/注册">
              <div slot="modal-body">
                <login></login>
              </div>
              <!--<div slot="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
              </div>-->
            </modal>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
  import Modal from '@/components/modal/blog-modal'
  import Login from '@/pages/login'
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: "blogHeader",
    computed: {
      userInfo() {
        return this.user === undefined ? null : JSON.parse(this.user)
      },
      ...mapGetters({
        user: "user"
      })
    },
    methods: {
      ...mapMutations({
        removeUser: 'REMOVE_USER'
      })
    },
    components: {
      Modal,
      Login
    }
  }
</script>

<style scoped>
  .logo{
    width:32px;
    height:32px;
  }
</style>
