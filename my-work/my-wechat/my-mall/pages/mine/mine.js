
Page({
  data:{
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  handleLogin:function(){
    wx.login({
      success:(res)=>{
        console.log("login",res);
        if(res.code){

        }

      }
    })
  },
  handleAuth:function(){
    wx.getSetting({
      success(res) {
           console.log(res)
           if (res.authSetting['scope.userInfo']) {
             console.log(1)
          // wx.authorize({
          //   scope: 'scope.werun',
          //   success(res) {
          //     // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
          //      console.log(res)
          //   }
          // })
        }
      }
    })
  },
  bindGetUserInfo:function(e){
    console.log(e)

  }
})