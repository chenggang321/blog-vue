/*
* 提示气泡框
* */

import Vue from 'vue'
import ToastTemp from '@/components/toast/toast.vue'

const ToastConstructor = Vue.extend(ToastTemp)
const removeDom = event => {
  event.target.parentNode.removeChild(event.target)
}
ToastConstructor.prototype.close = function () {
  this.hide()
  this.$el.addEventListener('transitionend', removeDom)
}

const Toast = options => {
  let opt = {
    position: 'middle',
    duration: 2500,
    iconClass: 'icon-Shapex' // icon-success
  }
  let instance = new ToastConstructor()
  options = typeof options === 'string' ? Object.assign({message: options}, opt)
    : Object.assign(opt, options)
  instance.message = options.message
  instance.position = options.position
  if (options.hasIcon) {
    instance.iconClass = options.iconClass
    instance.hasIcon = options.hasIcon
  }
  document.body.appendChild(instance.$mount().$el)
  instance.show()
  Vue.nextTick(() => {
    instance.timer = setTimeout(() => {
      instance.close()
    }, options.duration)
  })
  return instance
}

export default Toast

