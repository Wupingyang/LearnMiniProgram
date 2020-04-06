Page({
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
  handleBtnClickAdd(){
    // 1. 错误做法：界面不会刷新
    // this.data.cnt += 1
    // console.log(this.data.cnt)

    // 2. this.setData()
    this.setData({
      cnt: this.data.cnt + 1
    })
  },
  handleBtnClickSub(){
    this.setData({
      cnt: this.data.cnt - 1
    })
  }
})