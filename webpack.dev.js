const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: './dist',
    // publicPath: '/',
    historyApiFallback: true,
    compress: true,
    liveReload: true,
    port: 8080,
    proxy: {
      '/api': { target: 'http://localhost:3000', pathRewrite: { '^/api': '' } }
    },
    watchFiles: ['src/**/*']
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(false)
    })
  ]
});
