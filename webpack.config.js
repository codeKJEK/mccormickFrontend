const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "src/js/app.js"),
    index: path.resolve(__dirname, "src/js/index.js"),
    login: path.resolve(__dirname, "src/js/login.js"),
    rsvp: path.resolve(__dirname, "src/js/rsvp.js"),
    menu: path.resolve(__dirname, "src/js/menu.js"),
    talent: path.resolve(__dirname, "src/js/talent.js"),
    contact: path.resolve(__dirname, "src/js/contact.js"),
    output: path.resolve(__dirname, "src/js/output.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Home",
      filename: "index.html",
      chunks: ["app", "index"],
      inject: "body",
      template: "src/html/template.html",
    }),

    new HtmlWebpackPlugin({
      title: "RSVP",
      filename: "rsvp.html",
      chunks: ["app", "rsvp"],
      inject: "body",
      template: "src/html/template.html",
    }),
    new HtmlWebpackPlugin({
      title: "Menu",
      filename: "menu.html",
      chunks: ["app", "menu"],
      inject: "body",
      template: "src/html/template.html",
    }),
    new HtmlWebpackPlugin({
      title: "Talent",
      filename: "talent.html",
      chunks: ["app", "talent"],
      inject: "body",
      template: "src/html/template.html",
    }),
    new HtmlWebpackPlugin({
      title: "Contact",
      filename: "contact.html",
      chunks: ["app", "contact"],
      inject: "body",
      template: "src/html/contact.html",
    }),
    new HtmlWebpackPlugin({
      title: "Output",
      filename: "output.html",
      chunks: ["app", "output"],
      inject: "body",
      template: "src/html/template.html",
    }),
  ],
};
