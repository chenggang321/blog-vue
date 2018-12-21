<template>
  <header class="header">
    <h1>{{$route.meta.title}}</h1>
  </header>
</template>

<script>
  export default {
    name: "vwHeader"
  }
</script>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: azure;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: 40px;
  }
</style>
