module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ["import", {
      // 22替换11 解决：vue全部引入ant-design-vue报错Antd is not defined 
      // libraryName: "ant-design-vue", 11
      libraryName: "Antd", //22
      libraryDirectory: "es",
      style: true
    }] // `style: true` 会加载 less 文件
  ]
}