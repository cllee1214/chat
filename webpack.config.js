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
  devtool: 'inline-source-map',
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
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
            presets: ['react', 'env']
        }
      }
    ]
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 30000,
  //     minChunks: 1,
  //     maxAsyncRequests: 5,
  //     maxInitialRequests: 3,
  //     automaticNameDelimiter: '_',
  //     name: true,
  //     cacheGroups: {
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10,
  //         name: 'vendors'
  //       },
  //       default: {
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true
  //       }
  //     }
  //   }
  // },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Output Management',
      template: "./index.html"
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // new webpack.DllReferencePlugin({
    //   manifest: require('./dist/vendor-manifest.json')
    // })
    ]
};