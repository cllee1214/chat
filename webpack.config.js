const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './server/static/js')
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
    {
      test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/, 
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/, 
        loader: 'vue-loader'
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)/,
        use: 'file-loader'
      }
    ]
  },

  plugins: [
    // new HtmlWebpackPlugin({
    //   template: 'index.html'
    // }),
    // new CleanWebpackPlugin(['./server/view/home']),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new VueLoaderPlugin()
    ]
};