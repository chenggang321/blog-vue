<template>
  <div class="container-fluid" @scroll="handleScroll">
    <blog-header></blog-header>
    <div class="row m-t-60">
      <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
        <blog-aside></blog-aside>
      </div>
      <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 blog-main">
        <blog-content></blog-content>
      </div>
    </div>
  </div>
</template>

<script>
  import BlogHeader from '@/components/header/blog-header'
  import BlogContent from '@/components/content/blog-content'
  import BlogAside from '@/components/aside/blog-aside'

  export default {
    name: "home",
    methods:{
      handleScroll(){
        console.log('success')
      },
    },
    components: {
      BlogHeader,
      BlogContent,
      BlogAside
    }
  }
</script>

<style scoped>

</style>
