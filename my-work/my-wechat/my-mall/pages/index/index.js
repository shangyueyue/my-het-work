//index.js
//获取应用实例
const app = getApp()
const { bannerLists, navtabLists, goodslists}=require('./config.js');
Page({
  data: {
    bannerLists: bannerLists,
    navtabLists: navtabLists,
    goodslists: goodslists,
    selectItem:0
  },
  handleTap:function(e){
    const {id} = e.currentTarget.dataset;
    console.log("e", id);
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  handTapnav:function(e){
    const {id} =e.currentTarget;
    this.setData({ selectItem:id})

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  handleTotop: function () {
    wx.pageScrollTo({
      scrollTop: 500,
      duration: 3000
    })
  }
})
