<template>
  <transition name="fade">
    <div v-show="visible" :class="position" class="toast">
      <i class="icon iconfont" :class="iconClass" v-show="hasIcon"></i>
      <span>{{message}}</span>
    </div>
  </transition>
</template>

<script>
  import '@/assets/font/iconfont.css'

  export default {
    name: "toast",
    data() {
      return {
        visible: false,// 显示或隐藏
        message: '',// 提示文案
        position: '',// 提示的位置
        hasIcon:false,//是否有图标
        iconClass:'' // 图标
      }
    },
    methods: {
      hide() {
        this.visible = false
      },
      show() {
        this.visible = true
      }
    }
  }
</script>

<style scoped>
  .icon-success {
    font-size: 20px;
    color: #41B883;
  }

  .icon-Shapex{
    font-size: 20px;
    color: #FF9907;
  }

  .toast {
    position: fixed;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    word-wrap: break-word;
    padding: 10px;
    text-align: center;
    z-index: 9999;
    font-size: 20px;
    max-width: 80%;
    color: #fff;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.6);
    overflow: hidden;
  }

  .toast.middle {
    top: 50%;
  }

  .toast.top {
    top: 10%;
  }

  .toast.bottom {
    top: 90%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: transform .5s
  }

  .fade-enter, .fade-leave-active {
    transform: translate(-50%, -50%) scale(0);
  }
</style>
