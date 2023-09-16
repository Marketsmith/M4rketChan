const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        }
      },
      {
        test: /.(css|scss)$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      title: 'Development',
      template: './client/index.html',
    })
  ],


  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    hot: true,
    liveReload: true,
    static: {
      publicPath: "/public",
      directory: path.resolve(__dirname, 'public')
    },
    proxy: {
      '/': 'http://localhost:3000'
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },

};