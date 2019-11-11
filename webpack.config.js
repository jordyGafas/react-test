const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const meteorExternals = require("webpack-meteor-externals");

const clientConfig = {
  entry: ["./client/main.jsx", "babel-polyfill"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!(base|base64-js|meteor-node-stubs|swiper)\/).*/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/main.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  externals: [meteorExternals()],
  devServer: {
    hot: true
  }
};

const serverConfig = {
  entry: ["./server/main.js"],
  target: "node",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!(base|base64-js|meteor-node-stubs|swiper)\/).*/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    hot: true
  },
  externals: [meteorExternals()]
};

module.exports = [clientConfig, serverConfig];
