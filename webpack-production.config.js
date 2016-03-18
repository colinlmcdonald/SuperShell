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
<<<<<<< 7fea8c5e3bc494731ffd241d2fdddff5d4a780a9
        include: path.join(__dirname) },
=======
        exclude: /node_modules/,
      },
>>>>>>> Heroku
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'css') },
    ]
  }
}