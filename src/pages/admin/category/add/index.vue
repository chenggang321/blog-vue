<template>
  <div>
    <div class="row col-lg-offset-0">
      <div class="col-md-11">
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
          <button type="button" class="btn btn-default" @click="add">提交</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import toast from '@/components/toast/toast'

  export default {
    name: "category-add",
    data() {
      return {
        name: '',
      }
    },
    methods: {
      add() {
        if (!this.name) {
          toast({
            position:'top',
            message: '分类名称不能为空！'
          })
          return false
        }
        const data = {
          name:this.name
        }
        this.$api.addCategory(data).then(res=>{
          const data = res.data
          toast({
            position:'top',
            message: data.message
          })
          if(data.code === 200){
            this.$router.push('/admin/categoryList')
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
