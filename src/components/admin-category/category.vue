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
          <td>操作</td>
        </tr>
        <tbody v-if="categoryList">
          <tr v-for="(category,index) in categoryList">
            <td>{{index}}</td>
            <td>{{category.name}}</td>
            <td>
              <a href="/admin/category/edit">修改</a>|
              <a href="/admin/category/delete">删除</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colspan="3">暂时没有分类</td>
          </tr>
        </tbody>

      </table>
    </div>
</template>

<script>
    export default {
        name: "category",
      data(){
          return {
            categoryList:null
          }
      }
    }
</script>

<style scoped>

</style>
