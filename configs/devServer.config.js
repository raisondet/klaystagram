const path = require("path");

module.exports = {
  contentBase: path.resolve(__dirname, "../static"),
  host: "localhost",
  port: 8080,
  compress: true,
  historyApiFallback: true,
  hot: true,
  inline: true,
  open: "Google Chrome",
};
