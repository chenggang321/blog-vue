<template>
    <section class="content">
      <RouterView/>
    </section>
</template>

<script>
    export default {
        name: "vwContent"
    }
</script>

<style scoped>
.content{
  box-sizing: border-box;
  margin:100px 0;
  height:1134px;
  background: aqua;
}
</style>
