const path = require('path')

module.exports = {
    devServer: {
        // host: '0.0.0.0',     // default
        // port: 8080           // default
    },
    // publicPath: '/'          // default
    outputDir: 'lib',           // default: dist
    productionSourceMap: false, // 生成map后缀文件，对压缩代码错误追踪调试，生产环境关闭
    css: {
        extract: true           // production set true
    }
}