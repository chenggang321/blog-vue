<template>
  <div class="container">
    <div class="login-box">
      <img src="@/assets/logo.png" alt="logo">
    </div>
    <div v-if="error" class="c-error">{{error}}</div>
    <div class="m-t-60">
      <label>账号：<input type="text" placeholder="请输入账号" v-model="username" class="vw-input"></label>
    </div>
    <div class="m-t-20">
      <label>密码：<input type="password" placeholder="请输入密码" v-model="password" class="vw-input"></label>
    </div>
    <button @click="handleClick" class="vw-button inside m-t-60">登录</button>
  </div>
</template>

<script>
  import {mapMutations,mapGetters} from 'vuex'
  export default {
    name: "login",
    data() {
      return {
        username: '',
        password: '',
        error:''
      }
    },
    methods: {
      handleClick() {
        if(!this.username||!this.password){
          this.error = '账号密码不能为空！'
          return false
        }
        let user = {
          username:this.username,
          password:this.password
        }
        // 请求后台数据
        this.$api.getUser(user).then(res=>{
          if(res.status === 200){
            this.setUser(this.$des.enDes(res.data.username))
            this.$router.push('/home')
          }
        })
      },
      ...mapMutations({
        setUser: 'SET_USER'
      })
    }
  }
</script>

<style scoped>
  .container {
    text-align: center;
  }
  .login-box{
    margin:150px 0 10px 0;
  }
</style>
