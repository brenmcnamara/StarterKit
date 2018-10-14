const CopyWebpackPlugin = require('copy-webpack-plugin');
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
            presets: [
              '@babel/preset-env',
              '@babel/preset-flow',
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'node_modules/normalize.css/normalize.css'),
        to: path.join(__dirname, 'dist/normalize.css'),
      },
    ]),
    new HtmlWebpackPlugin({template: './index.html'}),
  ],
};
