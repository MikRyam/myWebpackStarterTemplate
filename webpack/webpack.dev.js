const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: 'cheap-module-source-map',
  devServer: {
    static: path.resolve(__dirname, "..", "./build"),
    // historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
    host: 'localhost',
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ]
}
