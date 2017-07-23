<template>
  <div id="app">
    <demonstration
        title="Message 消息提示"
        tag="h2"
        description="常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。"
        :show-content="false">
    </demonstration>
    <!-- 基础用法 -->
    <demonstration
        title="基础用法"
        description="从顶部出现，3 秒后自动消失。"
        :highlight="sourcecodeA">
      <template slot="source">
        <vm-button :plain="true" @click="open">打开消息提示</vm-button>
        <vm-button :plain="true" @click="openVn">VNode</vm-button>
      </template>
      <template slot="explanation">
        接受一个 <code>options</code> 字面量参数，在最简单的情况下，你可以设置 <code>message</code> 字段，用于设置正文内容。
        默认情况下，经过一段时间后 <code>Message</code> 组件会自动关闭，但是通过设置 <code>duration</code>，可以控制关闭的时间间隔，特别的是，如果设置为 <code>0</code>，则不会自动关闭。
        注意：<code>duration</code> 接收一个 <code>Number</code>，单位为毫秒，默认为 <code>3000</code>。
      </template>
    </demonstration>
    <!-- 不同状态 -->
    <demonstration
        title="不同状态"
        description="用来显示「成功、警告、消息、错误」类的操作反馈。"
        :highlight="sourcecodeB">
      <template slot="source">
        <vm-button :plain="true" @click="open2">成功</vm-button>
        <vm-button :plain="true" @click="open3">警告</vm-button>
        <vm-button :plain="true" @click="open">消息</vm-button>
        <vm-button :plain="true" @click="open4">错误</vm-button>
      </template>
      <template slot="explanation">
        当需要自定义更多属性时，<code>Message</code> 也可以接收一个对象为参数。比如，设置 <code>type</code> 字段可以定义不同的状态，默认为 <code>info</code>。
        此时正文内容以 <code>message</code> 的值传入。同时，我们也为 <code>Message</code> 的各种 <code>type</code>
        注册了方法，可以在不传入 <code>type</code> 字段的情况下像 <code>open4</code> 那样直接调用。
      </template>
    </demonstration>
    <!-- 加载中 -->
    <demonstration
        title="加载中"
        description="Loading 状态，可以再操作完成后手动移除。"
        :highlight="sourcecodeC">
      <template slot="source">
        <vm-button :plain="true" @click="openLoading">加载中</vm-button>
      </template>
      <template slot="explanation">
        多次触发返回的仍是同一个 <code>Message</code> 实例。
      </template>
    </demonstration>
    <demonstration
        title="可关闭"
        description="可以添加关闭按钮。"
        :highlight="sourcecodeD">
      <template slot="source">
        <vm-button :plain="true" @click="open5">成功</vm-button>
        <vm-button :plain="true" @click="open6">警告</vm-button>
        <vm-button :plain="true" @click="open7">消息</vm-button>
        <vm-button :plain="true" @click="open8">错误</vm-button>
      </template>
      <template slot="explanation">
        默认的 <code>Message</code> 是不可以被人工关闭的，如果需要可手动关闭的 <code>Message</code>，可以使用 <code>showClose</code> 字段。
      </template>
    </demonstration>
    <demonstration
        title="全局方法"
        :show-content="false"
        :code="sourcecodeF">
      <template slot="description">
        你可以在导入 <code>Message</code> 组件之后， 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 Message。
      </template>
      <templalte>
        <div class="vd-demo__desc">
          <ul>
            <li><code>this.$message(options)</code></li>
            <li><code>this.$message.info(options)</code></li>
            <li><code>this.$message.success(options)</code></li>
            <li><code>this.$message.warning(options)</code></li>
            <li><code>this.$message.error(options)</code></li>
            <li><code>this.$message.loading(options)</code></li>
          </ul>
        </div>
      </templalte>
    </demonstration>
    <demonstration
        title="单独引用"
        :show-content="false"
        :code="sourcecodeE">
      <template slot="description">
        单独引入 <code>Message</code>：
      </template>
      <template>
        <div class="vd-demo__desc">
          此时调用方法为 <code>Message(options)</code>。我们也为每个 <code>type</code> 定义了各自的方法，如 <code>Message.success(options)</code>。 并且可以调用 <code>Message.closeAll()</code>
          手动关闭所有实例。
          <ul>
            <li><code>Message(options)</code></li>
            <li><code>Message.info(options)</code></li>
            <li><code>Message.success(options)</code></li>
            <li><code>Message.warning(options)</code></li>
            <li><code>Message.error(options)</code></li>
            <li><code>Message.loading(options)</code></li>
          </ul>
        </div>
      </template>
    </demonstration>
    <demonstration
        title="Options"
        :show-content="false">
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>zIndex <i class="vd-demo__new">（新增）</i></td>
            <td>层级</td>
            <td>number</td>
            <td>—</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>message</td>
            <td>消息文字</td>
            <td>string / VNode</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>type</td>
            <td>主题</td>
            <td>string</td>
            <td>success/warning/info/error/loading</td>
            <td>info</td>
          </tr>
          <tr>
            <td>iconClass</td>
            <td>自定义图标的类名，会覆盖 <code>type</code></td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>customClass</td>
            <td>自定义类名</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>duration</td>
            <td>显示时间, 毫秒。设为 0 则不会自动关闭</td>
            <td>number</td>
            <td>—</td>
            <td>3000</td>
          </tr>
          <tr>
            <td>showClose</td>
            <td>是否显示关闭按钮</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>onClose</td>
            <td>关闭时的回调函数, 参数为被关闭的 message 实例</td>
            <td>function</td>
            <td>—</td>
            <td>—</td>
          </tr>
          </tbody>
        </table>
      </template>
    </demonstration>
    <demonstration
        title="方法"
        :show-content="false">
      <template slot="description">
        调用 <code>Message</code> 或 <code>this.$message</code> 会返回当前 <code>Message</code> 的实例。
        如果需要手动关闭实例，可以调用它的 <code>close</code> 方法。
      </template>
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <tr>
            <th>方法名</th>
            <th>说明</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>close</td>
            <td>关闭当前的 Message</td>
          </tr>
          </tbody>
        </table>
      </template>
    </demonstration>
    <demonstration
        :show-content="false"
        :code="sourcecodeG">
      <template slot="title">
        全局配置 <i class="vd-demo__new">（新增特性）</i>
      </template>
      <template slot="description">
        调用 <code>Message.config(options) </code> 来进行全局配置。
      </template>
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>top</td>
            <td>提示组件距离顶端的距离，单位像素</td>
            <td>number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>duration</td>
            <td>显示时间, 毫秒。设为 0 则不会自动关闭，优先级低于局部配置</td>
            <td>number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>zIndex</td>
            <td>层级，优先级低于局部配置</td>
            <td>number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          </tbody>
        </table>
      </template>
    </demonstration>
  </div>
</template>

<script>
  import {sourcecodeA, sourcecodeB, sourcecodeC, sourcecodeD, sourcecodeE, sourcecodeF, sourcecodeG} from './template'
  export default {
    data () {
      return {
        sourcecodeA,
        sourcecodeB,
        sourcecodeC,
        sourcecodeD,
        sourcecodeE,
        sourcecodeF,
        sourcecodeG
      }
    },
    methods: {
      open() {
        this.$message('这是一条消息提示');
      },

      openLoading () {
        this.message = this.$message({
          type: 'loading',
          message: '加载中',
          duration: 0
        })
        setTimeout(() => {
          this.message.close()
        }, 3000)
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
      },

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
</script>

<style>
  #app {
    margin: 60px auto;
  }
</style>
