<template>
    <div>
      <div class="testContent" id="ContentBox" style="margin-top:20px;">
        <div class="blog-card" v-for="article in articleList" :key="article.id">
          <h4>{{article.title}}</h4>
          <hr style="color:#fff;margin:10px;"/>
          <p style="font-size: 10px">
            <span class="blog-tag blog-tag&#45;&#45;info"><span class="glyphicon glyphicon-user blog-icon"></span><span>{{article.author}}</span></span>&nbsp;
            <span class="blog-tag blog-tag&#45;&#45;success"><span class="glyphicon glyphicon-time blog-icon"></span><span>{{article.create_time}}</span></span>&nbsp;
            <span class="blog-tag blog-tag&#45;&#45;warning"><span class="glyphicon glyphicon-eye-open blog-icon"></span><span>(10000)</span></span>&nbsp;
            <span class="blog-tag blog-tag&#45;&#45;danger"><span class="glyphicon glyphicon-comment blog-icon"></span><span>(888)</span></span>
          </p>
          <p style="font-size: 15px">{{article.description}}</p>
          <p><a class="btn-sm blog-button" href="" role="button">查看全文 >>></a></p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "list",
        data(){
          return {
            articleList:null
          }
        },
        created(){
          this.$api.getArticleList().then(res=>{
            const data = res.data
            this.articleList = data.data.list
          })
        }
    }
</script>

<style scoped>

</style>
