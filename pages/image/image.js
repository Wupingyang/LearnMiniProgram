// pages/image/image.js
Page({
  data: {
    imagepath: ''
  },
  handleChooseAlbum() {
    // 系统API，让用户在相册选择图片或者拍照
    wx.chooseImage({
      complete: (res) => {
        // 1.取出路径
        const path = res.tempFilePaths[0]

        // 2.设置imagepath
        this.setData({
          imagepath: path
        })
      },
    })

  },
  handlePicLoad() {
    console.log('图片加载完成')
  }
})