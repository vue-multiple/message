export const sourcecodeA = `<template>
  <vm-button :plain="true" @click="open">打开消息提示</vm-button>
  <vm-button :plain="true" @click="openVn">VNode</vm-button>
</template>

<script >
  export default {
    methods: {
      open() {
        this.$message('这是一条消息提示');
      },
      
      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', {
            style: {
              display: 'inline-block',
              margin: 0
            }
          }, [
            h('span', null, '内容可以是 '),
            h('i', {style: 'color: teal'}, 'VNode')
          ])
        });
      }
    }
  }
</script>`

export const sourcecodeB = `<template>
  <vm-button :plain="true" @click="open2">成功</vm-button>
  <vm-button :plain="true" @click="open3">警告</vm-button>
  <vm-button :plain="true" @click="open">消息</vm-button>
  <vm-button :plain="true" @click="open4">错误</vm-button>
</template>
<script>
  export default {
    methods: {
      open() {
        this.$message('这是一条消息提示');
      },
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      }
    }
  }
</script>`

export const sourcecodeC = `<template>
  <vm-button :plain="true" @click="openLoading">加载中</vm-button>
</template>

<script >
  export default {
    methods: {
     openLoading () {
        this.message = this.$message({
          type: 'loading',
          message: '加载中',
          duration: 0
        })
        setTimeout(() => {
          this.message.close()
        }, 3000)
      }
    }
  }
</script>`

export const sourcecodeD = `<template>
  <vm-button :plain="true" @click="open5">成功</vm-button>
  <vm-button :plain="true" @click="open6">警告</vm-button>
  <vm-button :plain="true" @click="open7">消息</vm-button>
  <vm-button :plain="true" @click="open8">错误</vm-button>
</template>

<script>
  export default {
    methods: {
      open5() {
        this.$message({
          showClose: true,
          message: '这是一条消息提示'
        });
      },

      open6() {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open7() {
        this.$message({
          showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open8() {
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      }
    }
  }
</script>`

export const sourcecodeE = `import Message from 'vue-multiple-message'`

export const sourcecodeF = `import Vue from 'vue'
import Message from 'vue-multiple-message'
Vue.prototype.$message = Message`

export const sourcecodeG = `Messge.config({
  top: 20,
  duration: 3000,
  zIndex: 2000
})`