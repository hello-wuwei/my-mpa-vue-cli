const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.base.config.js');
const setupProxy = require('./setupProxy')

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      /* 遇到后缀为.css的文件，webpack先用css-loader加载器去解析这个文件，遇到“@import”等语句就将相应样式文件引入（所以如果没有css-loader，就没法解析这类语句），最后计算完的css，将会使用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签里*/
      {
        test: /\.less$/,
        use: [ 
          'style-loader', // 开发环境css文件没必要单独打包（故：MiniCssExtractPlugin.loader -> style-loader ）
          'css-loader',    // webpack识别css文件（webpack只识别js代码，需要转化）
          'less-loader'  // 转换less文件样式为css
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    // historyApiFallback: true,    // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
    // host: process.env.HOST || '0.0.0.0',
    open: true,
    port: 9000,
    compress: true,
    hot: true,
    proxy: setupProxy
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});