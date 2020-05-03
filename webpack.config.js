const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  return {
    entry: path.join(__dirname, "index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(s*)css$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.png|svg|jpg$/,
          loader: "file-loader?name=assets/images/[name].[ext]",
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            },
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ["dist"],
      }),
      new HtmlWebpackPlugin({
        template: `${__dirname}/index.html`,
        filename: "index.html",
        inject: true,
      }),
    ],
    mode: "development",
    watch: true,
    devtool: "eval-source-map",
    devServer: {
      watchContentBase: true,
      compress: true,
      port: 3000,
    },
  };
};
