// pages/home/home.js
Page({
  data: {
    titles: ['衣服', '裤子', '鞋子']
  },
  handleBtnClick() {
    console.log('按钮发生点击')
  },
  handleTouchStart() {
    console.log('touchStart')
  },
  handleTouchMove() {
    console.log('touchMove')
  },
  handleTouchEnd() {
    console.log('touchEnd')
  },
  handleTap() {
    console.log('tap')
  },
  handleLongPress() {
    console.log('longPress')
  },
  handleEventClick(event) {
    console.log('------', event)
  },
  handleEventEnd(event) {
    console.log('++++++', event)
  },
  handleInter(event) {
    console.log('内层', event)
  },
  handleOuter(event) {
    console.log('外层', event)
  },
  handleItemClick(event) {
    console.log(event);
    const dataset = event.currentTarget.dataset;
    const index = dataset.index;
    const title = dataset.item;
    console.log(title, index)
  },
  handleCaptureView1() {
    console.log('handleCaptureView1')
  },
  handleCaptureView2() {
    console.log('handleCaptureView2')
  },
  handleCaptureView3() {
    console.log('handleCaptureView3')
  },
  handleBindView1() {
    console.log('handleBindView1')
  },
  handleBindView2() {
    console.log('handleBindView2')
  },
  handleBindView3() {
    console.log('handleBindView3')
  }
})