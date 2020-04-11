// 注册一个小程序示例
App({
  // 生命周期函数：后台存活2小时
  onLaunch: function(){
    console.log("小程序初始化完成：onLaunch")
  },
  onShow: function(options){
    console.log("页面显示完成：onShow")
    // 1. 判断小程序进入场景
    console.log(options)
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;
    }
    // 2. 获取用户信息，并且将用户信息传递给服务器
    // wx.getUserInfo({
    //   success: function(res){
    //     console.log(res)
    //   }
    // })
  },
  onHide: function(){
    console.log("页面被隐藏：onHide")
  },
  onError: function(msg){
    console.log("小程序发生错误：OnError")
  },
  globalData:{
    name: 'WittyWu',
    age: 18
  }
  
}
)