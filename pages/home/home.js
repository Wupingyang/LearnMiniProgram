// pages/home/home.js
Page({
  data: {
    cnt: 0,
    isShow: true
  },
  handleIncrement() {
    this.setData({
      cnt: this.data.cnt + 1
    })
  },
  handleTabClick(event) {
    const index = event.detail.index
    const title = event.detail.title
    console.log(index, title)
  },
  handleIncremntCpn() {
    //最终目的：修改my-sel中的cnt
    //1.获取组件对象
    const my_sel = this.selectComponent('.sel-class')
    //2.通过setData修改组件中的数据（直接暴露不合理）
    // my_sel.setData({
    //   cnt: my_sel.data.cnt + 1
    // })
    //3.通过方法修改组件内的数据
    my_sel.incrementCnt(10)
  },
  handleIsShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
 
})