const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // 开启代理服务器 方式一 不能配置多个代理
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  // 开启代理服务器 方式二 配置多个代理
  devServer: {
    proxy: {
      '/api1': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/api1':''},
        ws: true, // 用于支持websocket
        changeOrigin: true // 用于控制请求头中host值
      },
      '/api2': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/api2':''},
        ws: true, 
        changeOrigin: true
      }
    }
  }
})
