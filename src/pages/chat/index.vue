<template>
  <div>
    <h3>chat</h3>
    <input type="text" v-model="text">
    <button @click="send">发送</button>
  </div>
</template>

<script>
  import {sendMsg} from "@/utils/socket";

  export default {
    name: "index",
    data(){
      return {
        text:''
      }
    },
    methods:{
      send(){
        sendMsg(1,2,this.text)
      }
    }
  }
</script>

<style scoped>

</style>
