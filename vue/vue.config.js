const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
    }
  },
  configureWebpack: {
    plugins: [
      new Dotenv()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import '@/less/const.less';`
      }
    }
  }
})
