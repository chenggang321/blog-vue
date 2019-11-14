<template>
  <div class="jumbotron blog-card">
    <div v-if="userInfo">
      <div class="row">
        <div class="col-xs-6">评论</div>
        <div class="col-xs-6" style="text-align: right">共有 <span class="messageCount" v-if="articleDetail">{{articleDetail.comments.length}}</span>
          条评论
        </div>
      </div>
      <br/>
      <div>{{JSON.parse(userInfo).username}}</div>
      <textarea rows="3" class="form-control" placeholder="请输入评论" v-model="comment"></textarea><br/>
      <p>
        <button @click="addComment(articleDetail._id,JSON.parse(userInfo)._id)" class="btn btn-sm" role="button"
                style="background:#409eff;color:#fff;">提交
        </button>
      </p>
      <div class="panel panel-default messageList" v-if="comments">
        <div class="panel-body" v-for="c in comments">
          <div class="row">
            <div class="col-xs-6">{{c.user_id}}</div>
            <div class="col-xs-6" style="text-align: right">
              {{c.create_time}}
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              {{c.content}}
            </div>
          </div>
        </div>
      </div>
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
  import toast from "@/components/toast/toast";

  export default {
    name: "comment",
    props: {
      articleDetail: Object
    },
    data() {
      return {
        comment: ''
      }
    },
    computed: {
      comments(){
        return this.articleDetail && this.articleDetail.comments
      },
      ...mapGetters({
        userInfo: 'user'
      })
    },
    methods: {
      addComment(article_id, user_id) {
        if (!this.comment) {
          toast("评论不能为空")
          return
        }
        this.$api.addComment({article_id, user_id, content: this.comment}).then(res => {
          const data = res.data
          if (data.code === 200) {
            this.comments.push({
              user_id,
              content: data.data.content,
              create_time: data.data.create_time
            })
          } else {
            toast(data.message)
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
