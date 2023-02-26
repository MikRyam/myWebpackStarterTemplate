const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: "development",
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
    publicPath: '/',
    clean: true,
  },
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
  ],
  // devtool: "inline-source-map",
  // devServer: {
  //   static: path.join(__dirname, "build"),
  //   historyApiFallback: true,
  //   port: 3000,
  //   open: true,
  //   hot: true,
  //   host: 'localhost',
  // },
}
