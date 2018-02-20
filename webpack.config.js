var webpack = require("webpack"); 
var HtmlWebpackPlugin = require('html-webpack-plugin'); 
var path = require('path'); 



var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html', 
  filename:'index.html', 
  inject: 'body'
}); 


module.exports = {
  entry: [
    './app/index.js'
  ], 
  output: {
    path: path.resolve(__dirname + "/dist"), 
    filename: "index_bundle.js"
  }, 
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }, 
      {
        test:/\.(png|jpg|gif)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:25000
            }
          }
        ]
      }
    ]
  },
  resolve:{
    modules: [
      path.resolve(__dirname, "app"), 
      "node_modules"
  ], 
    extensions: ['*', '.js']
  }, 
  plugins: [HtmlWebpackPluginConfig], 
   
}