const path = require('path');
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/happiness_report_2022/'
    : '/',
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src/'),
        '@assets': path.resolve(__dirname,'src/assets')
      }
    }
  }
}
