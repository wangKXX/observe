const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")
module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../js/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../build/script'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {test:/\.js$/, loader:"babel-loader", query: { compact:true }, exclude: /node_modules/}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
　　　 filename: path.resolve(__dirname, "../build/index.html"),
      template: path.resolve(__dirname, '../index.html'),
      inject: 'body',
      // hash: true,
      chunks:['index'],
      minify: true
    })
  ]
}