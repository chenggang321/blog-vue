<template>
  <div class="loadingBox">
    <div class="loadEffect">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "loading"
  }
</script>

<style scoped>
  .loadEffect {
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width: 130px;
    height: 130px;
    margin: 30px auto;
    background: rgba(0,0,0,0.6);
    border-radius: 8px;
  }

  .loadEffect span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    -webkit-animation: load 1.04s ease infinite;
  }

  @-webkit-keyframes load {
    0% {
      -webkit-transform: scale(1.2);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(.3);
      opacity: 0.5;
    }
  }

  .loadEffect span:nth-child(1) {
    left: 0;
    top: 50%;
    margin-top: -10px;
    -webkit-animation-delay: 0.13s;
  }

  .loadEffect span:nth-child(2) {
    left: 14px;
    top: 14px;
    -webkit-animation-delay: 0.26s;
  }

  .loadEffect span:nth-child(3) {
    left: 50%;
    top: 0;
    margin-left: -10px;
    -webkit-animation-delay: 0.39s;
  }

  .loadEffect span:nth-child(4) {
    top: 14px;
    right: 14px;
    -webkit-animation-delay: 0.52s;
  }

  .loadEffect span:nth-child(5) {
    right: 0;
    top: 50%;
    margin-top: -10px;
    -webkit-animation-delay: 0.65s;
  }

  .loadEffect span:nth-child(6) {
    right: 14px;
    bottom: 14px;
    -webkit-animation-delay: 0.78s;
  }

  .loadEffect span:nth-child(7) {
    bottom: 0;
    left: 50%;
    margin-left: -10px;
    -webkit-animation-delay: 0.91s;
  }

  .loadEffect span:nth-child(8) {
    bottom: 14px;
    left: 14px;
    -webkit-animation-delay: 1.04s;
  }
</style>
