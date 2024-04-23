const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const isProduction = process.env.NODE_ENV === 'production';

const commonConfig = {
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  }
};

const serverConfig = {
  ...commonConfig,
  target: 'node',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  plugins: [
    new NodemonPlugin({
      watch: path.resolve(__dirname, 'dist'),
      externalsPresets: { node: true }
    })
  ]
};

const clientConfig = {
  ...commonConfig,
  target: 'web',
  entry: './public/client.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js'
  },
  externals: [nodeExternals()],
  devServer: {
    historyApiFallback: true
  }
};

module.exports = [serverConfig, clientConfig];
