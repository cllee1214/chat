const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js')

const devConfig = {
  entry: './src/App.js',
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/': 'http://localhost:8888'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new VueLoaderPlugin()
    ]
};

module.exports = merge(devConfig, commonConfig)