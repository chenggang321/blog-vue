<template>
  <div>
    <ol class="breadcrumb">
      <li><a href="/">首页</a></li>
      <li><span>工具</span></li>
    </ol>
    <h3>html转md</h3>
    <div class="form-group">
      <label for="code">html：</label>
      <textarea id="code" class="form-control" v-model="code" rows="10" placeholder="请输入html"></textarea>
    </div>
    <div class="form-group">
      <label for="editor">md：</label>ß
      <mavon-editor id="editor" style="height: 100%" v-model="content"></mavon-editor>
    </div>
    <button @click="handleClick" class="btn btn-default">转换</button>
  </div>
</template>

<script>
  import {mavonEditor} from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  export default {
    name: "html-to-md",
    data() {
      return {
        code: '',
        content: ''
      }
    },
    methods: {
      handleClick() {
        let self = this
        self.content = new reMarked().render(self.code)
      }
    },
    components: {
      mavonEditor
    }
  }
</script>

<style scoped>

</style>
