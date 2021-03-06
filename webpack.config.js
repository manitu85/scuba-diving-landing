const webpack = require("webpack");
const path = require("path");

const config = {
  entry: {
    app: "./src/js/app.js",
    vendor: "./src/js/vendor.js",
  },
  output: {
    path: path.resolve(__dirname, "./app/scripts"),
    filename: "[name]-bundle.js",
  },
  mode: process.env.NODE_ENV || "development",
  devtool: "source-map",
  stats: { colors: true },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

module.exports = config;

// https://stackoverflow.com/questions/55921442/how-to-fix-referenceerror-primordials-is-not-defined-in-node
