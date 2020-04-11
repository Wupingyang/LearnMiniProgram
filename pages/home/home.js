// getApp()获取App()产生的示例对象
const app = getApp()
console.log(app.globalData.name)

// 注册一个页面
Page({
  // -------------2.初始化数据--------------
  data: {
    name: 'WittyWu',
    age: 18,
    students:[
      {id: 110, name: 'kobe', age: 15},
      {id: 111, name: 'jame', age: 16},
      {id: 112, name: 'curry', age: 17},
      {id: 113, name: 'WittyWu', age: 18}
    ],
    cnt: 0
  },

  // -------------3.监听wxml中的一些事件-----------
  handleBtnClickAdd(){
    this.setData({
      cnt: this.data.cnt + 1
    })
  },
  handleBtnClickSub(){
    this.setData({
      cnt: this.data.cnt - 1
    })
  },
  handleGetUserInfo(event){
    console.log(event)
  },

  // -------------1.监听页面的生命周期函数----------------
  // 页面被加载出来时
  onload() {
    console.log('onLoad')
  },
  // 页面显示出来时
  onShow() {
    console.log('onShow')
  },
  // 页面初次渲染完成时
  onReady() {
    console.log('onReady')
  },
  // 页面隐藏起来时
  onHide() {
    console.log('onHide')
  },
  onUnload() {
    console.log('onUnload')
  },

  // -----------4.监听其他事件---------------
  // 监听页面滚动
  onPageScroll(obj){
    console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到底部')
  },
  // 监听下拉刷新事件
  onPullDownRefresh(){
    console.log('下拉刷新')
  },
  // 监听tabBar点击事件
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  }
})