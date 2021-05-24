module.exports = {
    publicPath: '/',
    // publicPath: process.env.NODE_ENV === 'production'
    // ? '/page_whoisspy/'
    // : '/',
    outputDir: 'dist',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
      proxy: {
        // change xxx-api/login => mock/login
        // detail: https://cli.vuejs.org/config/#devserver-proxy
        '/api': {
          // target: 'http://127.0.0.1:9999/',
          target:'https://whoisspy.herokuapp.com',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
