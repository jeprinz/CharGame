var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    // 'babel-polyfill', // Uncomment this one for certian ES6 features
    './src/index.js'//,
    // 'webpack-dev-server/client?http://localhost:8080' //Uncoment this for webpack-dev-server
  ],
  output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
  module: {
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/env', '@babel/flow']
            }
        }
    ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map'
};
