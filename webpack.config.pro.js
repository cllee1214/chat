const path = require('path');
const webpack = require('webpack');

const { merge } = require('webpack-merge');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const commonConfig = require('./webpack.config.common.js')

const proConfig = {
  mode: 'production',
  entry: {
    app: './src/App.js',
  },
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, './dist')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: 'js/common.js'
        },
        // default: false
      }
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new FileManagerPlugin({
      onEnd: {
        copy: [
          { source: path.resolve(__dirname, './dist/index.html'), destination: path.resolve(__dirname, './server/view/index.html')},
          { source: path.resolve(__dirname, './dist/js'), destination: path.resolve(__dirname, './server/static/js')},
        ]
      }
    }),
    new CleanWebpackPlugin([path.resolve(__dirname, './dist/')])
    ]
};

module.exports = merge(proConfig, commonConfig)