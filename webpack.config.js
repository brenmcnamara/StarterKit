const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },

  entry: ['./src/index.js'],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  mode: 'development',

  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-class-properties',
            ],
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin()],
};
