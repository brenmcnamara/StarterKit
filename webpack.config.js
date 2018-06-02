const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

const path = require('path');

module.exports = {
  devServer: {
    contentBase: './dist',
  },
  devtool: 'inline-source-map',
  entry: [path.resolve(__dirname, 'src/index')],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'flow'],
            plugins: [require('babel-plugin-transform-object-rest-spread')],
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'templates/index.ejs',
    }),
    new Webpack.NamedModulesPlugin(),
    new Webpack.HotModuleReplacementPlugin(),
  ],
};
