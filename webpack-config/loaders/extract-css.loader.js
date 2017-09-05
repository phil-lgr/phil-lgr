const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    test: /\.(css)$/,
    loader: ExtractTextPlugin.extract({
        fallbackLoader: "style-loader",
        loader: [{
            loader: "css-loader",
        }]
    }),
};