<template>
  <div class="row">
    <div class="col-lg-offset-0 col-md-11">
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
</template>

<script>
  import toast from '@/components/toast/toast'

  export default {
    name: "category-edit",
    data() {
      return {
        name: ''
      }
    },
    created() {
      const id = this.$route.params.id
      this.$api.categoryDetail({id}).then(res => {
        const data = res.data
        this.name = data.data.name
      })
    },
    methods: {
      add() {
        if (!this.name) {
          toast({
            position: 'top',
            message: '分类名称不能为空！'
          })
          return false
        }
        const data = {
          id: this.$route.params.id,
          name: this.name
        }
        this.$api.updateCategory(data).then(res => {
          const data = res.data
          toast({
            position: 'top',
            message: data.message
          })
          this.$router.push('/admin/categoryList')
        })
      }
    }
  }
</script>

<style scoped>

</style>
