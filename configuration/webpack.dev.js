const { resolve } = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'main.js',
    path: resolve(__dirname, '..', 'dist')
  }
})
