<template>
  <div class="col-xs-12" v-if="categoryList">
    <div class="list-group">
      <a class="list-group-item"
         :class="{active:isActive===-1}"
         @click="changeIndex(-1,'all')"
      >
        全部文章分类
      </a>
      <a
        v-for="(category,index) in categoryList"
        :key="category.id"
        :class="{active:isActive===index}"
        class="list-group-item"
        @click="changeIndex(index,category.name)"
      >{{category.name}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "blog-aside",
    data() {
      return {
        categoryList: null,
        isActive: -1
      }
    },
    created() {
      this.$api.getCategoryList().then(res => {
        const data = res.data
        this.categoryList = data.data.list
      })
    },
    methods:{
      changeIndex(index,categoryName){
        this.isActive = index
        console.log(categoryName)
      }
    }
  }
</script>

<style scoped>

</style>
