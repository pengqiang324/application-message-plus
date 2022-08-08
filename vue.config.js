const { defineConfig } = require('@vue/cli-service')

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    // 设置别名 alias
    config.resolve.alias
        .set('@', resolve('examples'))
        .set('~', resolve('packages'))
        
    // 排除文件夹 eslint
    config.module
        .rule('eslint')
        .exclude.add(resolve('lib'))
        .end()
        .exclude.add(resolve('docs'))
        .end()
    config.module
      .rule('js')
      .include
        .add('/packages')
        .end()
      .use('babel')
        .loader('babel-loader')
  },
  lintOnSave:false
})
