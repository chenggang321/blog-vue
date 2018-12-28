<template>
  <div>
    <div class="blog-card" style="margin-top:20px;" v-if="content">
      <h4>详情</h4>
      <h4>{{content.title}}</h4>
      <hr/>
      <p style="font-size: 10px">
        <span class="blog-tag blog-tag&#45;&#45;info"><span class="glyphicon glyphicon-user blog-icon"></span><span>{{content.author}}</span></span>&nbsp;
        <span class="blog-tag blog-tag&#45;&#45;success"><span class="glyphicon glyphicon-time blog-icon"></span><span>{{content.create_time}}</span></span>&nbsp;
        <span class="blog-tag blog-tag&#45;&#45;warning"><span class="glyphicon glyphicon-eye-open blog-icon"></span><span>({{content.meta.views}})</span></span>&nbsp;
        <span class="blog-tag blog-tag&#45;&#45;danger"><span class="glyphicon glyphicon-comment blog-icon"></span><span>({{content.meta.comments}})</span></span>
      </p>
      <div v-html="compileContent" v-highlight></div>
    </div>
    <comment :articleDetail="content"></comment>
  </div>
</template>

<script>
  import './highlight/styles/tomorrow.css'
  import './marked'
  import './highlight/highlight.pack'
  import Comment from '@/components/comment/comment'

  export default {
    name: "detail",
    data() {
      return {
        content: null,
        compileContent:''
      }
    },
    created() {
      const id = this.$route.params.id
      const self = this
      this.$api.getArticleDetail({id}).then(res => {
        const data = res.data
        self.content = data.data
        self.compileContent=marked(self.content.content)
      })
    },
    components:{
      Comment
    }
  }
</script>

<style scoped>

</style>
