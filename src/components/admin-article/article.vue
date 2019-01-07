<template>
  <div>
    <ol class="breadcrumb">
      <li><a href="/">首页</a></li>
      <li><span>分类列表</span></li>
    </ol>
    <h3>分类列表</h3>
    <table class="table table-hover table-bordered">
      <tr>
        <td>ID</td>
        <td>文章名称</td>
        <td>文章作者</td>
        <td>文章介绍</td>
        <td>创建时间</td>
        <td>更新时间</td>
        <td>操作</td>
      </tr>
      <tbody v-if="articleList">
        <tr v-for="(article,index) in articleList">
          <td>{{index}}</td>
          <td>{{article.title}}</td>
          <td>{{article.author}}</td>
          <td>{{article.desc}}</td>
          <td>{{article.create_time}}</td>
          <td>{{article.update_time}}</td>
          <td>
            <a href="/admin/category/edit">修改</a>|
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
  </div>
</template>

<script>
  import toast from "@/components/toast/toast"

  export default {
    name: "article-list",
    data() {
      return {
        articleList: null
      }
    },
    created() {
      this.$api.getArticleList().then(res => {
        const data = res.data
        this.articleList = data.data.list
      })
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
      }
    }
  }
</script>

<style scoped>

</style>
