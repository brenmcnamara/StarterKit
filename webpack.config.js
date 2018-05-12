import HtmlWebpackPlugin from 'html-webpack-plugin';

import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [path.resolve(__dirname, 'src/index')],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/templates/index.ejs',
    }),
  ],
  module: {
    loaders: [{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] }],
  },
};
