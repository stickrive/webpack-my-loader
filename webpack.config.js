const path = require("path")

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [path.resolve(__dirname, "./loaders/replaceLoader.js")],
      },
    ],
  },
  output: {
    filename: "[name]-[hash:6].js",
    path: path.resolve(__dirname, "dist"),
  },
}
