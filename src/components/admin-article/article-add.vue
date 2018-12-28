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
        <label for="author">作者：</label>
        <input v-model="form.author" type="text" class="form-control" id="author" placeholder="请输入作者姓名" name="author">
      </div>
      <div class="form-group">
        <label for="keyword">关键字：</label>
        <input v-model="form.keyword" type="text" class="form-control" id="keyword" placeholder="请输入关键字" name="keyword">
      </div>
      <div class="form-group">
        <label for="description">简介：</label>
        <input v-model="form.description" type="text" class="form-control" id="description" placeholder="请输入内容简介"
               name="description">
      </div>
      <div class="form-group">
        <label for="img_url">图片链接：</label>
        <input v-model="form.img_url" type="text" class="form-control" id="img_url" placeholder="请输入图片链接"
               name="img_url">
      </div>
      <div class="form-group">
        <label for="tags">标签：</label>
        <input v-model="form.tags" type="text" class="form-control" id="tags" placeholder="请输入标签" name="tags">
      </div>
      <div class="form-group">
        <label>文章类型：</label>
        <label class="radio-inline">
          <input v-model="form.type" type="radio" name="type" value="0"> 普通文章
        </label>
        <label class="radio-inline">
          <input v-model="form.type" type="radio" name="type" value="1"> 简历
        </label>
        <label class="radio-inline">
          <input v-model="form.type" type="radio" name="type" value="2"> 管理员
        </label>
      </div>
      <div class="form-group">
        <label>文章发布状态：</label>
        <label class="radio-inline">
          <input v-model="form.state" type="radio" name="state" value="0"> 草稿
        </label>
        <label class="radio-inline">
          <input v-model="form.state" type="radio" name="state" value="1"> 已发布
        </label>
      </div>
      <div class="form-group">
        <label>文章转载状态：</label>
        <label class="radio-inline">
          <input v-model="form.origin" type="radio" name="origin" value="0"> 原创
        </label>
        <label class="radio-inline">
          <input v-model="form.origin" type="radio" name="origin" value="1"> 转载
        </label>
        <label class="radio-inline">
          <input v-model="form.origin" type="radio" name="origin" value="2"> 混合
        </label>
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
  import toast from "../toast/toast";
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
          description: '',
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
        this.$api.addArticle(this.form).then(res => {
          const data = res.data
          toast({
            position: 'top',
            message: data.message
          })
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
