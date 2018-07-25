// pages/popular/popular.js
var config=require('./config.js');
Page({
  data: {
    bannerList: config.bannerList
  },
  onLoad(options) {
    console.log(options,11111)
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
  
  },
  viewBannerDetail(e){
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  }
})