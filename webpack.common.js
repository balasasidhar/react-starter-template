const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'My Application',
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new WebpackBar(),
    new StylelintPlugin({ emitError: true, failOnError: true }),
    new ESLintPlugin({ extensions: ['js', 'jsx'] })
  ],
  resolve: {
    modules: [path.resolve('node_modules')],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@views': path.resolve(__dirname, 'src', 'views'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@config': path.resolve(__dirname, 'src', 'config'),
      '@routes': path.resolve(__dirname, 'src', 'routes'),
      '@redux': path.resolve(__dirname, 'src', 'redux'),
      '@action-types': path.resolve(__dirname, 'src', 'redux', 'action-types'),
      '@actions': path.resolve(__dirname, 'src', 'redux', 'action-creators'),
      '@reducers': path.resolve(__dirname, 'src', 'redux', 'reducers'),
      '@scss': path.resolve(__dirname, 'src', 'scss')
    }
  }
};
