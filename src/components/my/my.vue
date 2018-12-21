<template>
  <div>
    <button class="vw-button" @click="handleClick">退出登录</button>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: "my",
    methods: {
      handleClick(){
        // 先清除再跳转
        this.removeUser()
        this.$router.push('/login')
      },
      ...mapMutations({
        removeUser:'REMOVE_USER'
      })
    }
  }
</script>

<style scoped>

</style>
