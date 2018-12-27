<template>
  <!--<div class="col-xs-12" v-if="categoryList">
    <div class="list-group">
      <a href="/" class="list-group-item">
        全部文章分类
      </a>

      <a href="/?category={{cate.id}}" class="list-group-item active">{{cate.name}}</a>

      <a href="/?category={{cate.id}}" class="list-group-item">{{cate.name}}</a>

    </div>
  </div>-->
</template>

<script>
  export default {
    name: "blog-aside",
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
  }
</script>

<style scoped>

</style>
