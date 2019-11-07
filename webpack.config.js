const HtmlWebpackPlugin = require('html-webpack-plugin')
const express = require('express');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/entry.tsx',
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devServer: {
    contentBase: './images/', // TODO: 没搞清楚具体作用
    watchContentBase: true,
    before(app) {
      app.use('/images', express.static('./images/'));
    }
  }
}
