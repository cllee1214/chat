const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    hot: true
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
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
            presets: ['react', 'env']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: "./index.html"
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
    ]
};