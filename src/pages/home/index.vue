<template>
  <div>
    <router-view></router-view>
    <!--BlogContent></BlogContent>-->
  </div>
</template>

<script>
  import BlogContent from '@/components/content/blog-content'

  export default {
    name: "index",
    components: {
      BlogContent
    }
  }
</script>

<style scoped>

</style>
