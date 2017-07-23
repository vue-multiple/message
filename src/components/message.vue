<template>
  <transition name="vm-message-fade">
    <div
        class="vm-message"
        :class="customClass"
        v-show="visible"
        @mouseenter="clearTimer"
        @mouseleave="startTimer">
      <div class="vm-message__group">
        <p class="vm-message__inner"><i class="vm-message__icon" :class="[iconClass ? iconClass : 'vm-message-icon--' + type]"></i><slot>{{message}}</slot></p>
        <div v-if="showClose" class="vm-message__close vm-message-icon--close" @click="close"></div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'VmMessage',

    componentName: 'VmMessage',

    data () {
      return {
        visible: false,
        message: '',
        duration: 3000,
        type: 'info',
        iconClass: '',
        customClass: '',
        onClose: null,
        showClose: false,
        closed: false,
        timer: null
      }
    },

    watch: {
      closed (newVal) {
        if (newVal) {
          this.visible = false
          this.$el.addEventListener('transitionend', this.destoryElement)
        }
      }
    },

    methods: {
      destoryElement () {
        this.$el.removeEventListener('transitionend', this.destoryElement)
        this.$destroy()
        this.$el.parentNode.removeChild(this.$el)
      },
      close () {
        this.closed = true
        if (typeof this.onClose === 'function') {
          this.onClose(this)
        }
      },
      clearTimer () {
        clearTimeout(this.timer)
      },
      startTimer () {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close()
            }
          }, this.duration)
        }
      }
    },

    mounted () {
      this.visible = true
      this.startTimer()
    }
  }
</script>
