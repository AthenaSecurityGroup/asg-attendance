const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  name: "server",
  entry: "./server.js",
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "server.js"
  },
  target: "node",
  node: {
    __dirname: false,
    __filename: false
  },
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new webpack.BannerPlugin("require('source-map-support/register');",
        { raw: true, entryOnly: false })
  ]
};
