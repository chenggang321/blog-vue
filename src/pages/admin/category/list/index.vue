<template>
  <div>
    <ol class="breadcrumb">
      <li><a href="/">首页</a></li>
      <li><span>分类列表</span></li>
    </ol>
    <h3>分类列表</h3>
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <td>ID</td>
          <td>分类名称</td>
          <td>创建时间</td>
          <td>更新时间</td>
          <td>操作</td>
        </tr>
      </thead>

      <tbody v-if="categoryList">
      <tr v-for="(category,index) in categoryList">
        <td>{{index}}</td>
        <td>{{category.name}}</td>
        <td>{{category.create_time}}</td>
        <td>{{category.update_time}}</td>
        <td>
          <a @click="toEditCategory(category._id)">修改</a>|
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
    <page class="pull-right page"
          :total="total"
          :current-page='current'
          :display="display"
          @pagechange="pageChange"></page>
  </div>
</template>

<script>
  import toast from "@/components/toast/toast"
  import Page from '@/components/page/page'

  export default {
    name: "category",
    data() {
      return {
        categoryList: null,
        total: 0,     // 记录总条数
        display: 10,   // 每页显示条数
        current: 1,   // 当前的页数
      }
    },
    created() {
      this.getCategoryList()
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
      },
      toEditCategory(id){
        this.$router.push(`/admin/categoryEdit/${id}`)
      },
      pageChange(current) {
        this.getCategoryList(current)
      },
      getCategoryList(currentPage){
        this.$api.getCategoryList({
          pageSize: this.display,
          pageNum: currentPage
        }).then(res => {
          const data = res.data
          this.total = data.data.count
          this.current = data.data.pageNum
          this.categoryList = data.data.list
        })
      }
    },
    components:{
      Page
    }
  }
</script>

<style scoped>
  .page {
    margin-right: 20px;
  }
</style>
