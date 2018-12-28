<template>
  <div>
    <div class="testContent" id="ContentBox" style="margin-top:20px;" v-if="articleList.length !== 0">
      <div class="blog-card" v-for="article in articleList" :key="article.id">
        <h4>{{article.title}}</h4>
        <hr style="color:#fff;margin:10px;"/>
        <p style="font-size: 10px">
          <span class="blog-tag blog-tag&#45;&#45;info"><span class="glyphicon glyphicon-user blog-icon"></span><span>{{article.author}}</span></span>&nbsp;
          <span class="blog-tag blog-tag&#45;&#45;success"><span
            class="glyphicon glyphicon-time blog-icon"></span><span>{{article.create_time}}</span></span>&nbsp;
          <span class="blog-tag blog-tag&#45;&#45;warning"><span
            class="glyphicon glyphicon-eye-open blog-icon"></span><span>(10000)</span></span>&nbsp;
          <span class="blog-tag blog-tag&#45;&#45;danger"><span
            class="glyphicon glyphicon-comment blog-icon"></span><span>(888)</span></span>
        </p>
        <p style="font-size: 15px">{{article.description}}</p>
        <p><a class="btn-sm blog-button" role="button" @click="showDetail(article._id)">查看全文 >>></a></p>
      </div>
    </div>
    <div class="alert alert-warning" role="alert" style="text-align: center;margin-top:20px;" v-else>暂无文章</div>
  </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'

  export default {
    name: "list",
    created() {
      this.$api.getArticleList().then(res => {
        const data = res.data
        this.setArticleList(data.data.list)
      })
    },
    computed:{
      ...mapGetters({
        articleList: 'articleList'
      })
    },
    methods:{
      showDetail(id){
        this.$router.push(`/home/articleDetail/${id}`)
      },
      ...mapMutations({
        setArticleList:'SET_ARTICLELIST'
      })
    }
  }
</script>

<style scoped>

</style>
