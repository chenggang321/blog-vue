<template>
  <div>
    <form class="form-horizontal" id="loginBox">
      <div class="form-group">
        <label for="username" class="col-xs-1 col-sm-2 control-label"><span class="glyphicon glyphicon-user"></span></label>
        <div class="col-xs-11 col-sm-10">
          <input v-model="username" type="email" name="username" class="form-control" id="username" placeholder="username">
        </div>
      </div>
      <div class="form-group">
        <label for="password" class="col-xs-1 col-sm-2 control-label"><span class="glyphicon glyphicon-lock"></span></label>
        <div class="col-xs-11 col-sm-10">
          <input v-model="password" type="password" name="password" class="form-control" id="password" placeholder="Password">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <input type="button" value="登陆" @click="login" class="btn btn-default" />
          <a href="javascript:;" class="btn btn-default colMint" @click="toRegister">去注册</a>
          <br/>
          <div class="alert colWarning" role="alert" style="text-align: center;margin-bottom:0;"></div>
        </div>
      </div>
    </form>
    <form class="form-horizontal" id="registerBox" style="display: none">
      <div class="form-group">
        <label for="username-1" class="col-xs-1 col-sm-2 control-label"><span class="glyphicon glyphicon-user"></span></label>
        <div class="col-xs-11 col-sm-10">
          <input type="email" name="username" class="form-control" id="username-1" placeholder="username">
        </div>
      </div>
      <div class="form-group">
        <label for="password-1" class="col-xs-1 col-sm-2 control-label"><span class="glyphicon glyphicon-lock"></span></label>
        <div class="col-xs-11 col-sm-10">
          <input type="password" name="password" class="form-control" id="password-1" placeholder="Password">
        </div>
      </div>
      <div class="form-group">
        <label for="repassword" class="col-xs-1 col-sm-2 control-label"><span class="glyphicon glyphicon-ok"></span></label>
        <div class="col-xs-11 col-sm-10">
          <input type="password" name="repassword" class="form-control" id="repassword" placeholder="repassword">
        </div>
      </div>
      <div class="form-group">
        <label for="email" class="col-xs-1 col-sm-2 control-label"><span class="glyphicon glyphicon-envelope"></span></label>
        <div class="col-xs-11 col-sm-10">
          <input type="password" name="email" class="form-control" id="email" placeholder="email">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <input type="button" value="注册" class="btn btn-default" @click="register"/>
          <a href="javascript:;" class="btn btn-default colMint" @click="toLogin">去登录</a>
          <br/>
          <div class="alert colWarning" role="alert" style="text-align: center;margin-bottom:0;"></div>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
  import {mapMutations, mapGetters} from 'vuex'

  export default {
    name: "login",
    data() {
      return {
        username: '',
        password: '',
        error: ''
      }
    },
    methods: {
      toRegister() {
        $('#loginBox').hide();
        $('#registerBox').show();
      },
      login() {
        if (!this.username || !this.password) {
          this.error = '账号密码不能为空！'
          return false
        }
        let user = {
          username: this.username,
          password: this.password
        }
        // 请求后台数据
        this.$api.getUser(user).then(res => {
          if (res.status === 200) {
            this.setUser(this.$des.enDes(res.data.username))
            this.$router.push('/home')
          }
        })
      },
      toLogin(){
        $('#loginBox').show();
        $('#registerBox').hide();
      },
      register(){
        console.log('register');
      },
      ...mapMutations({
        setUser: 'SET_USER'
      })
    }
  }
</script>

<style scoped>
  .form-horizontal {
    width: 450px;
    margin: 0 auto;
  }
</style>
