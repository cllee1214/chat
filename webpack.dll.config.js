const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
      vendor: ['react','react-dom','react-router-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve('./dist', '[name]-manifest.json'),
      name: '[name]_library'
    })
  ]
};