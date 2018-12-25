<template>
    <div>
      <div class="panel panel-default" id="userInfo">
        <div class="panel-heading">用户信息</div>
        <div class="panel-body">
          <span>你好,管理员！</span>
          <router-link to="/admin">进入管理</router-link>
        </div>
        <div class="panel-body">
          <a href="javascript:;" id="logout">退出</a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "blog-aside"
    }
</script>

<style scoped>

</style>
