<template>
  <div class="container-fluid">
    <BlogHeader></BlogHeader>
    <div class="row m-t-60">
      <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
        <BlogAside></BlogAside>
      </div>
      <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 blog-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import BlogHeader from '@/pages/common/layout/header'
  import BlogAside from '@/pages/common/layout/aside'
    export default {
        name: "index",
      components:{
        BlogHeader,
        BlogAside
      }
    }
</script>

<style scoped>

</style>
