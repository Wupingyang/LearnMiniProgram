// pages/wxml/wxml.js
Page({
  data: {
    msg: "你好小程序",
    firstname: 'Witty',
    lastname: 'Wu',
    age: 24,
    time: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    isConfirm: false,
    score: 0,
    movies: ['盗梦空间', '大话西游', '星际穿越'],
    nums: [
      [11, 12],
      [21, 22]
    ]
  },
  onLoad() {
    setInterval(()=>{
      this.setData({
        time: new Date().toLocaleString()
      }), 1000})
  },
  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleInput(event) {
    const value = event.detail.value
    this.setData({
      score: value
    })
  },
  handleConfirm() {
    this.setData({
      isConfirm: true
    })
  },
  handleFocus() {
    this.setData({
      isConfirm: false
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})