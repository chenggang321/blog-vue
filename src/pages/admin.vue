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
  import AdminHeader from '@/components/admin-header/admin-header'

  export default {
    name: "admin",
    components: {
      AdminHeader
    }
  }
</script>

<style scoped>

</style>
