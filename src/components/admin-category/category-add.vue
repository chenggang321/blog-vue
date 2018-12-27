<template>
  <div>
    <ol class="breadcrumb">
      <li><a href="/">首页</a></li>
      <li><span>分类添加</span></li>
    </ol>
    <h3>分类添加</h3>
    <form method="post">
      <div class="form-group">
        <label for="name">分类名称：</label>
        <input v-model="name" type="text" class="form-control" id="name" placeholder="请输入分类名称" name="name">
      </div>
      <div class="form-group">
        <label for="desc">分类介绍：</label>
        <input v-model="desc" type="text" class="form-control" id="desc" placeholder="请输入分类介绍" name="desc">
      </div>
      <button type="button" class="btn btn-default" @click="add">提交</button>
    </form>
  </div>
</template>

<script>
  import toast from '@/components/toast/toast'

  export default {
    name: "category-add",
    data() {
      return {
        name: '',
        desc: ''
      }
    },
    methods: {
      add() {
        if (!this.name || !this.desc) {
          toast({
            position:'top',
            message: '分类名称或介绍不能为空！'
          })
          return false
        }
        const data = {
          name:this.name,
          desc:this.desc
        }
        this.$api.addCategory(data).then(res=>{
          const data = res.data
          toast({
            position:'top',
            message: data.message
          })
          this.name = ''
          this.desc = ''
        })
      }
    }
  }
</script>

<style scoped>

</style>
