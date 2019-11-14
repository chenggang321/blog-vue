<template>
  <div>
    <div class="testContent" id="ContentBox" style="margin-top:20px;" v-if="articleList.length !== 0">
      <div class="blog-card" v-for="article in articleList" :key="article.id" @click="showDetail(article._id)">
        <h4>{{article.title}}</h4>
        <hr style="color:#fff;margin:10px;"/>
        <p style="font-size: 10px">
          <span class="blog-tag blog-tag&#45;&#45;info"><span class="glyphicon glyphicon-user blog-icon"></span><span>{{article.author}}</span></span>&nbsp;
          <span class="blog-tag blog-tag&#45;&#45;success"><span
            class="glyphicon glyphicon-time blog-icon"></span><span>{{article.create_time}}</span></span>&nbsp;
          <span class="blog-tag blog-tag&#45;&#45;warning"><span
            class="glyphicon glyphicon-eye-open blog-icon"></span><span>({{article.meta.views}})</span></span>&nbsp;
          <span class="blog-tag blog-tag&#45;&#45;danger"><span
            class="glyphicon glyphicon-comment blog-icon"></span><span>({{article.meta.comments}})</span></span>
        </p>
        <p style="font-size: 15px">{{article.desc}}</p>
        <p>查看全文 >>></p>
      </div>
    </div>
    <div class="alert alert-warning" role="alert" style="text-align: center;margin-top:20px;" v-else>暂无文章</div>
  </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  import {debounce,isReachBottom} from '@/utils/utils'
  import toast from "@/components/toast/toast";
  export default {
    name: "index",
    created() {
      const self = this
      this.$api.getArticleList().then(res => {
        const data = res.data
        this.setArticleList(data.data.list)
      })
      let page = 2
      // 滚动事件监听
      window.onscroll=debounce(function(){
        if(isReachBottom()){
          self.$api.getArticleList({
            category_id: self.category,
            pageNum:page
          }).then(res => {
            const data = res.data
            if(data.data.count>self.articleList.length){
              page = data.data.currentPage + 1
              self.articleList.push(...data.data.list)
            }else{
              toast({
                hasIcon: true,
                position:'top',
                message: "没有文章了！"
              })
            }
          })
        }
      },200)
    },
    computed:{
      ...mapGetters({
        articleList: 'articleList',
        category:'category'
      })
    },
    methods:{
      showDetail(id){
        this.$router.push(`/home/articleDetail/${id}`)
      },
      ...mapMutations({
        setArticleList:'SET_ARTICLELIST'
      })
    },
    destroyed(){
      // 切换组件时移除滚动事件
      window.onscroll=null
    }
  }
</script>

<style scoped>
</style>
