<template>
  <div class="container-fluid">
    <vw-header></vw-header>
    <div class="row m-t-60">
      <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
        <blog-aside></blog-aside>
      </div>
      <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 blog-main">
        <vw-content></vw-content>
      </div>
    </div>
  </div>
</template>

<script>
  import VwHeader from '@/components/header/vw-header'
  import VwContent from '@/components/content/vw-content'
  import BlogAside from '@/components/aside/blog-aside'

  export default {
    name: "home",
    components: {
      VwHeader,
      VwContent,
      BlogAside
    }
  }
</script>

<style scoped>

</style>
