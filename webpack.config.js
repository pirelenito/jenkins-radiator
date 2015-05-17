/* jshint node: true */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  context: path.join(__dirname),
  entry: './lib/index.js',

  output: {
    path: 'dist',
    filename: '[name]-[hash].js'
  },

  plugins: [new HtmlWebpackPlugin({
    template: 'lib/index.html'
  })],

  module: {
    loaders: [
      {
        test: /\.scss$/,
        // Query parameters are passed to node-sass
        loader: 'style!css!sass?outputStyle=expanded&' +
          'includePaths[]=' + (path.resolve(__dirname, './bower_components')) + '&' +
          'includePaths[]=' + (path.resolve(__dirname, './node_modules'))
      },
      {
        test: /(\.js)|(\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          optional: ['runtime'],
          stage: 0
        }
      }
    ]
  }
};
