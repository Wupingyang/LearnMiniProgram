const TOKEN = 'token'
App({
  // 对象：小程序关闭会被回收，失效
  globalData: {
    token: ''
  },
  onLaunch() {
    // 1.先从缓存中取出token（如果取出token，只需要验证token是否过期即可，不需要执行登陆操作）
    const token = wx.getStorageSync(TOKEN);
    // 2.判断token是否有值
    if (token && token.length != 0) { // 已经有token了，验证token是否过期
      this.check_token(token)  // 验证token是否过期
    }else{ // 没有toekn进行登陆操作
      this.login()
    }
  },
  check_token(token) {
    console.log('执行验证token操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res)=> {
        if (!res.data.errCode) {
          console.log('token有效')
          this.globalData.token = token
        }else {
          this.login()
        }
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },
  login() {
    console.log('执行登陆操作')
    // 登陆操作
    wx.login({
      // code只有5分钟的有效期
      success: (res)=> {
        // 1.获取code
        const code = res.code;
        // 2.将code发送到我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res)=> {
            // 1.取出token
            const token = res.data.token;
            // 2.将token保存在globalData中
            this.globalData.token = token;
            // 3.进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
})