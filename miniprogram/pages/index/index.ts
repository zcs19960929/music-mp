// index.ts

import { sayHello } from "../../api/hello"

Page({
  data: {
    message:'Hello World'
  },
  hi(){
    sayHello().then(data=>{
      console.log(data)
      const message = data+'来自接口返回'
      this.setData({
        message
      })
    })
  }
})
