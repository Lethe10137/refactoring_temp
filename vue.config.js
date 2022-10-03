module.exports={
    devServer: {
      proxy: {
        '': {
        // 目标地址
          target: "http://localhost:3000",// 要访问的接口域名
           // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
          changeOrigin: true,
          // 是否重写路径
          pathRewrite: {
          // 这里理解成用''代替target里面的地址
              '^': '' 
            }
        },
      }
    }  
  }
