import Vue from 'vue'
import {isVNode} from '../utils/util'
let MessageConstructor = Vue.extend(require('./message.vue'))

let global = {} // 全局配置
let instance
let instances = []
let seed = 1
let nextZIndex = 2000
let optsZIndex = -1

var Message = function (options) {
  if (Vue.prototype.$isServer) return
  options = options || {}

  if (
    options.type === 'loading'
    && instance
    && instance.vm.visible
  ) {
    return instance.vm
  }

  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  if (
    'zIndex' in options
    && typeof options.zIndex === 'number'
    && options.zIndex > -1
  ) {
    optsZIndex = options.zIndex
  }

  if (!options.duration
    && typeof options.duration === 'undefined'
    && global.duration) {
    options.duration = global.duration
  }

  let userOnClose = options.onClose
  let id = 'message_' + seed++

  options.onClose = function () {
    Message.close(id, userOnClose)
  }

  instance = new MessageConstructor({
    data: options
  })
  instance.id = id
  if (isVNode(instance.message)) {
    instance.$slots.default = [instance.message]
    instance.message = null
  }
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  instance.dom.style.zIndex = optsZIndex < 0
    ? nextZIndex++
    : optsZIndex
  if (
    'top' in global
    && typeof global.top === 'number'
  ) {
    instance.dom.style.top = `${global.top}px`
  }
  instances.push(instance)
  return instance.vm
}

Message.config = function (options) {
  global = options || {}
  if (
    'zIndex' in global
    && typeof global.zIndex === 'number'
    && global.zIndex > -1
  ) {
    optsZIndex = global.zIndex
  }
}

;['success', 'warning', 'info', 'error', 'loading'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})

Message.close = function (id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (instances[i].id === id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
}

Message.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}

export default Message
