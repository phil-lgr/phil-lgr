const ExtractTextPlugin = require('extract-text-webpack-plugin');

function extractTextPluginGenerator(hash = true) {
    return new ExtractTextPlugin({
        filename: hash ? '[name].bundle.[contenthash].css' : '[name].bundle.css',
        allChunks: false
    })
}

module.exports = {
    prod: extractTextPluginGenerator(true /*hash*/),
};

