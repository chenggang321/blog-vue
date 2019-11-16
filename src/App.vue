<template>
  <div id="app">
    <loading v-if="loading"></loading>
    <router-view name="layout"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
  import Loading from '@/components/loading/loading'
  import {mapGetters} from 'vuex'

  export default {
    name: 'App',
    computed: {
      ...mapGetters([
        'loading'
      ])
    },
    components: {
      Loading
    }
  }
</script>

<style>

</style>
