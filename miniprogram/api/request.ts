const baseUrl = 'https://music-server-1542636-1255509607.ap-shanghai.run.tcloudbase.com'

export const get = (url:string) =>{
  wx.showLoading({
    title:'加载中'
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url:baseUrl+url,
      method:'GET',
      success:(res)=>{
        resolve(res.data)
      },
      fail: reject,
      complete:()=>{
        wx.hideLoading()
      }
    })
  })

}