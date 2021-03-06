var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loaders: ['babel?presets[]=react,presets[]=es2015'],
        include: path.join(__dirname) },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'css') },
    ]
  }
}