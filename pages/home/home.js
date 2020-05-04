Page({
  handleShowToast() {
    wx.showToast({
      title: '消息提示框',
      icon: 'success',
      duration: 2000,
      mask: true,
      //image: '/assets/icon/icon.jpg'
      success() {
        console.log('展示弹窗成功')
      },
      fail() {
        console.log('展示弹窗失败')
      },
      complete() {
        console.log('展示弹窗完成')
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '提示',
      content: '模态对话框',
      //showCancel: false,
      cancelText: '返回',
      cancelColor: 'red',
      success(res) {
        console.log(res)
        if (res.cancel){
          console.log('用户点击取消')
        }else if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: 'Loading',
      mask: true
    })
    setTimeout(()=>{
      wx.hideLoading()
    }, 1000)
  },
  handleShowActionSheet() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'red',
      success(res) {
        console.log(res)
        console.log(res.tapIndex)
      }
    })
  },
  onShareAppMessage() {
    return{
      title: '转发标题',
      path: '/pages/about/about',
      imageUrl: '/assets/hacker.jpg'
    }
  }
})