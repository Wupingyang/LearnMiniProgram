import request from '../../service/network.js'

Page({
  data: {

  },
  onLoad: function (options) {
    // 1.原生方式发送网络请求
    //this.get_data_origin()

    // 2.使用封装的request发送网络请求
    // Promise（链式编程方式）最大的好处是防止出现回调地狱
    request({
      url: 'http://123.207.32.32:8000/recommend',
    }).then(res=> {
      console.log(res)
    }).catch(err=> {
      console.log(err)
    })
  },
  get_data_origin() {
    // 发送网络请求
    // 1.发送最简单的GET请求
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: function(res) {
        console.log(res)
      }
    })
    // 2.get请求，但是携带参数
    wx.request({
      url: 'http://123.207.32.32:8000/home/data',
      data: {
        type: 'sell',
        page: 1
      },
      success: function(res) {
        console.log(res)
      }
    })
    // 3.post请求，并且携带参数
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        name: 'WittyWu',
        age: 18
      },
      success: function(res) {
        console.log(res)
      }
    })
  }
})