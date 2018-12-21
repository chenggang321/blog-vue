<template>
  <div>
    <vw-header></vw-header>
    <vw-content></vw-content>
    <vw-footer></vw-footer>
  </div>
</template>

<script>
  import VwHeader from '@/components/header/vw-header'
  import VwContent from '@/components/content/vw-content'
  import VwFooter from '@/components/footer/vw-footer'

  export default {
    name: "home",
    components: {
      VwHeader,
      VwContent,
      VwFooter
    }
  }
</script>

<style scoped>

</style>
