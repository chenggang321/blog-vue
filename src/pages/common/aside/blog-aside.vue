<template>
  <div class="col-xs-12 m-t-20" v-if="categoryList" id="categoryBox">
    <div class="list-group">
      <a class="list-group-item"
         :class="{active:isActive===-1}"
         @click="changeIndex(-1,'')"
      >
        全部文章分类
      </a>
      <a
        v-for="(category,index) in categoryList"
        :key="category.id"
        :class="{active:isActive===index}"
        class="list-group-item"
        @click="changeIndex(index,category._id)"
      >{{category.name}}</a>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

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
    methods: {
      changeIndex(index, categoryId) {
        this.isActive = index
        this.$api.getArticleList({category_id: categoryId}).then(res => {
          const data = res.data
          this.setArticleList(data.data.list)
          this.setCategory(categoryId)
          this.$router.push('/home/list')
        })
      },
      ...mapMutations({
        setArticleList: 'SET_ARTICLELIST',
        setCategory:'SET_CATEGORY'
      })
    }
  }
</script>

<style scoped>

</style>
