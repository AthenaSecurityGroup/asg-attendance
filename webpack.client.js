const path = require('path');

module.exports = {
  name: "client",
  entry: './client.js',
  output: {
    filename: 'client.js',
    path: path.join(__dirname, '/dist/public/')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      }
    ]
  }
};
