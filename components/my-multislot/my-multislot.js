// components/my-multislot/my-multislot.js
Component({
  //让使用可以给组件传入数据
  properties: {
    title: {
      type: String,
      value: ''
    }
  },
  //定义组件内部的初始化数据
  data: {
    cnt: 0
  },
  //定义组件内部的函数
  methods: {
 
  },
  //定义组件的配置选项
  options: {
    multipleSlots: true
    //styleIsolation: 'apply-shared'
  },
  //外界给组件传入额外的样式
  externalClasses: [],
  //可以监听properties/data属性的改变
  observers: {
    cnt: function(newVal) {
      console.log(newVal)
    }
  },
  //组件中监听生命周期函数
  //1.监听所在页面的生命周期
  pageLifetimes: {
    show: function() {
      console.log('监听所在页面显示出来')
    },
    hide: function() {
      console.log('监听所在页面隐藏起来')
    },
    resize: function() {
      console.log('监听所在页面尺寸改变')
    }
  },
  //2.监听组件本身的生命周期
  lifetimes: {
    created() {
      console.log('组件被创建')
    },
    attached() {
      console.log('组件被添加到页面中')
    },
    ready() {
      console.log('组件被渲染出来')
    },
    moved() {
      console.log('组件被移动到节点的另一个位置')
    },
    detached() {
      console.log('组件被移除掉')
    }
  }
})
