<template>
  <div>
    <ol class="breadcrumb">
      <li><a href="/">首页</a></li>
      <li><span>分类列表</span></li>
    </ol>
    <h3>分类列表</h3>
    <table class="table table-hover table-bordered">
      <tr>
        <td>ID</td>
        <td>分类名称</td>
        <td>分类介绍</td>
        <td>创建时间</td>
        <td>更新时间</td>
        <td>操作</td>
      </tr>
      <tbody v-if="categoryList">
      <tr v-for="(category,index) in categoryList">
        <td>{{index}}</td>
        <td>{{category.name}}</td>
        <td>{{category.desc}}</td>
        <td>{{category.create_time}}</td>
        <td>{{category.update_time}}</td>
        <td>
          <a href="/admin/category/edit">修改</a>|
          <a @click="deleteCategory(category._id,index)">删除</a>
        </td>
      </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="3">暂时没有分类</td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
  import toast from "@/components/toast/toast"

  export default {
    name: "category",
    data() {
      return {
        categoryList: null
      }
    },
    created() {
      this.$api.getCategoryList().then(res => {
        const data = res.data
        this.categoryList = data.data.list
      })
    },
    methods:{
      deleteCategory(id,index){
        if(index>-1){
          this.categoryList.splice(index,1)
        }
        this.$api.delCategory({id}).then(res=>{
          const data = res.data
          toast({
            position:'top',
            message: data.message
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
