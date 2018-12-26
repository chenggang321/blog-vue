<template>
  <!-- Modal -->
  <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">{{title}}</h4>
        </div>
        <div class="modal-body">
         <slot name="modal-body"></slot>
        </div>
        <div class="modal-footer">
          <slot name="modal-footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props:{
          id: String,
          title: String
        },
        name: "blog-modal"
    }
</script>

<style scoped>
  .modal-header{
    border: none;
  }
  .modal-title{
    text-align: center;
  }
  .modal-footer{
    border: none;
  }
  .modal{
    background-color:rgba(0,0,0,.5) ;
  }
</style>
