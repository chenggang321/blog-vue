<template>
  <div>
    <ol class="breadcrumb">
      <li><a href="/">首页</a></li>
      <li><span>内容添加</span></li>
    </ol>
    <h3>内容添加</h3>
    <form method="post">
      <div class="form-group">
        <label for="category">分类：</label>
        <select name="category" id="category" class="form-control" v-model="form.category">
          <option :value="c._id" v-for="c in categoryList" :key="c.id">{{c.name}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="title">标题：</label>
        <input v-model="form.title" type="text" class="form-control" id="title" placeholder="请输入内容标题" name="title">
      </div>
      <div class="form-group">
        <label for="description">简介：</label>
        <input v-model="form.desc" type="text" class="form-control" id="description" placeholder="请输入内容简介"
               name="description">
      </div>
      <div class="form-group">
        <label>文章内容：</label>
        <mavon-editor style="height: 100%" v-model="form.content" ></mavon-editor>
      </div>
      <button type="button" class="btn btn-default" @click="handleClick">提交</button>
    </form>
  </div>
</template>

<script>
  import toast from "@/components/toast/toast";
  import {mavonEditor} from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  export default {
    name: "article-add",
    data() {
      return {
        categoryList: null,
        form: {
          category: '',
          title: '',
          author: '',
          keyword: '',
          desc: '',
          img_url: '',
          tags: '',
          type: '0',
          state: '0',
          origin: '0',
          content: ''
        }
      }
    },
    created() {
      this.$api.getCategoryList().then(res => {
        const data = res.data
        this.categoryList = data.data.list
      })
    },
    methods: {
      handleClick() {
        if(!this.form.category) return toast({position:'top', message: '分类名称不能为空！'})
        if(!this.form.title) return toast({position:'top', message: '标题不能为空！'})
        if(!this.form.desc) return toast({position:'top', message: '简介不能为空！'})
        if(!this.form.content) return toast({position:'top', message: '内容不能为空！'})
        this.$api.addArticle(this.form).then(res => {
          const data = res.data
          toast({
            position: 'top',
            message: data.message
          })
          if(data.code === 200){
            this.$router.push('/admin/articleList')
          }
        })
      }
    },
    components: {
      mavonEditor
    }
  }
</script>

<style scoped>

</style>
