const webpack = require('webpack');

module.exports = new webpack.ContextReplacementPlugin(/moment[\\\/]lang$/, /^\.\/(en)$/);