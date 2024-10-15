const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProgressPlugin() // Użyj wbudowanej wersji bez dodatkowych opcji
    ]
  }
};
