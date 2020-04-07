<template>
  <div>
    <AdminHeader></AdminHeader>
    <div class="container-fluid">
      <div class="row">
        <RouterView/>
      </div>
    </div>
  </div>
</template>

<script>
  import AdminHeader from '@/pages/common/layout/adminHeader'

  export default {
    name: "index",
    components: {
      AdminHeader
    }
  }
</script>

<style scoped>

</style>
