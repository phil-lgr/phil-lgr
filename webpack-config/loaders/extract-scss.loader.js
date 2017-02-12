const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    test: /\.(scss)$/,
    loader: ExtractTextPlugin.extract({
        fallbackLoader: "style-loader",
        loader: [{
            loader: "css-loader",
            query: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: '[name][local]'
            }
        },
            {
                loader: "sass-loader",
                query: {
                    sourceMap: true,
                    sourceComments: true
                }
            }]
    })
};