const path = require('path');

const PATHS = {
  entry: path.join(__dirname, process.env.npm_package_config_entry),
  output: path.join(__dirname, process.env.npm_package_config_output)
};

module.exports = {
  entry: {
    path: PATHS.entry
  },
  output: {
    path: PATHS.output,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      }
    ]
  },
  devServer: {
    contentBase: PATHS.output
  }
};
