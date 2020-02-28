const path = require('path');

const fs = require('fs')

const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = require('./webpack.dev.config.js');

// const getFiles = (currentPath, files, ext) => {
  
//   const dirs = fs.readdirSync(currentPath);
//   dirs.forEach((dir) => {
//     const childPath = path.join(currentPath, dir);  // 拼接为子路径
//     const stats = fs.statSync(childPath);    // 读取文件的基本状态
//     if (stats.isDirectory()) {    // 为目录文件夹
//       const page_dirs = fs.readdirSync(childPath);
//       page_dirs.forEach(page_dir => {
//         if (ext && page_dir === ext) {
//           const page_path = path.join(childPath, page_dir)
//           files.push({
//             name: dir,
//             entry: page_path
//           });
//         }
//       })
//     }
//   })
// }

// const readdirAllFiles = (path, ext) => {
//   const files = []
//   getFiles('src/pages', files, 'index.js')
//   return files;
// }

const pro_names = fs.readdirSync('src/pages')

const entries = {}

const plugins = pro_names.map(pro_name => {
  // console.log(pro_name)
  entries[pro_name] = './src/pages/' + pro_name + '/index.js'
  return new HtmlWebpackPlugin({
    filename: pro_name + '/index.html',   // 为什么不是 '../public/index.html'，我的理解是无论与要用的template是不是在一个目录，都是从根路径开始查找
    template: 'src/pages/' + pro_name + '/index.html',
    inject: true,
    chunks: [pro_name],
    // hash: false
  })
})

module.exports = merge(devConfig, {
  entry: entries,
  output: {
    // path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[hash:8].bundle.js'
  },
  plugins: plugins
})