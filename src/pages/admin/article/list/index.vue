<template>
  <div>
    <ol class="breadcrumb">
      <li><a href="/">首页</a></li>
      <li><span>分类列表</span></li>
    </ol>
    <h3>分类列表</h3>
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <td>ID</td>
          <td>文章名称</td>
          <td>文章作者</td>
          <td>文章介绍</td>
          <td>创建时间</td>
          <td>更新时间</td>
          <td>操作</td>
        </tr>
      </thead>

      <tbody v-if="articleList">
        <tr v-for="(article,index) in articleList">
          <td>{{index}}</td>
          <td>{{article.title}}</td>
          <td>{{article.author}}</td>
          <td>{{article.desc}}</td>
          <td>{{article.create_time}}</td>
          <td>{{article.update_time}}</td>
          <td>
            <a @click="editArticle(article._id)">修改</a>|
            <a @click="deleteArticle(article._id,index)">删除</a>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
      <tr>
        <td colspan="3">暂时没有分类</td>
      </tr>
      </tbody>
    </table>
    <page class="pull-right page"
          :total="total"
          :current-page='current'
          :display="display"
          @pagechange="pageChange"></page>
  </div>
</template>

<script>
  import toast from "@/components/toast/toast"
  import Page from '@/components/page/page'

  export default {
    name: "article-list",
    data() {
      return {
        articleList: null,
        total: 0,     // 记录总条数
        display: 10,   // 每页显示条数
        current: 1,   // 当前的页数
      }
    },
    created() {
      this.getArticleList()
    },
    methods: {
      deleteArticle(id, index) {
        if (index > -1) {
          this.articleList.splice(index, 1)
        }
        this.$api.deleteArticle({id}).then(res => {
          const data = res.data
          toast({
            position: 'top',
            message: data.message
          })
        })
      },
      editArticle(id){
        this.$router.push(`/admin/articleEdit/${id}`)
      },
      pageChange(current) {
        this.getArticleList(current)
      },
      getArticleList(currentPage){
        this.$api.getArticleList(
          {
            pageSize: this.display,
            pageNum: currentPage
          }
        ).then(res => {
          const data = res.data
          this.total = data.data.count
          this.current = data.data.pageNum
          this.articleList = data.data.list
        })
      }
    },
    components: {
      Page
    }
  }
</script>

<style scoped>
  .page {
    margin-right: 20px;
  }
</style>
