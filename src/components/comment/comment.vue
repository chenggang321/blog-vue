<template>
  <div class="jumbotron blog-card">
    <div v-if="userInfo">
      <div class="row">
        <div class="col-xs-6">评论</div>
        <div class="col-xs-6" style="text-align: right">共有 <span class="messageCount" v-if="articleDetail">{{articleDetail.meta.comments}}</span> 条评论</div>
      </div>
      <br/>
      <div>{{JSON.parse(userInfo).username}}</div>
      <textarea rows="3" class="form-control" placeholder="请输入评论" id="messageContent"></textarea><br/>
      <p>
        <button class="btn btn-sm" role="button" id="messageBtn" style="background:#409eff;color:#fff;">提交</button>
      </p>
      <div class="panel panel-default messageList"></div>
      <nav>
        <ul class="pager">
          <li class="previous"><a href="javascript:;"><span aria-hidden="true">&larr;</span>上一页</a></li>
          <li class="pageList"></li>
          <li class="next"><a href="javascript:;">下一页<span aria-hidden="true">&rarr;</span></a></li>
        </ul>
      </nav>
    </div>
    <div class="alert alert-warning" role="alert" style="text-align: center" v-else>你还没有登录请先登陆</div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "comment",
    props:{
      articleDetail: Object
    },
    computed: {
      ...mapGetters({
        userInfo: 'user'
      })
    }
  }
</script>

<style scoped>

</style>
