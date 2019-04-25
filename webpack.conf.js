const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [
          /node_modules/
        ]
      }
    ]
  },

  devServer: {
    contentBase: './',
    compress: true,
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
    https: false,
    port: 3000
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new webpack.HotModuleReplacementPlugin()
  ]
}
