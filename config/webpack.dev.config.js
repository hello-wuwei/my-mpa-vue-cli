const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.base.config.js');
const setupProxy = require('./setupProxy')

const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          // {
          //   loader: 'vue-style-loader'
          // },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    // historyApiFallback: true,    // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
    // host: process.env.HOST || '0.0.0.0',
    open: true,
    port: 9090,
    compress: true,
    hot: true,
    proxy: setupProxy
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});