var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
<<<<<<< 93f5897ba113377cc8d799dd59c907dbca7c697b
<<<<<<< e8825a9d51a82c96b796282dbbb628ff33f5be25
    './src/index.js'
=======
    './public/src/index.js'
>>>>>>> Heroku
=======
    './src/index.js'
>>>>>>> Heroku
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