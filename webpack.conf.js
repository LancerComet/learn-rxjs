const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: './src/index.ts',

  resolve: {
    extensions: ['.js', '.ts']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [
          /node_modules/
        ]
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          { loader: 'css-loader', options: { sourceMap: false, importLoaders: 1 } }
        ]
      },

      {
        test: /\.(styl|stylus)$/,
        use: [
          'vue-style-loader',
          { loader: 'css-loader', options: { sourceMap: false, importLoaders: 1 } },
          { loader: 'stylus-loader', options: { sourceMap: false } }
        ]
      },

      {
        test: /\.(jade|pug)$/,
        oneOf: [
          // For vue Jade / Pug template.
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },

          // For Jade / Pug standalone files.
          {
            use: ['pug-loader']
          }
        ]
      },
    ]
  },

  devServer: {
    contentBase: './',
    compress: true,
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
    https: false,
    port: 3000,
    quiet: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new webpack.HotModuleReplacementPlugin(),

    new VueLoaderPlugin(),

    new FriendlyErrorsPlugin()
  ]
}
