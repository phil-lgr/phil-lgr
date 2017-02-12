const path = require('path');

module.exports = {
    dev: {
        filename: '[name].bundle.js',
        publicPath: '',
        pathinfo: true,
        chunkFilename: "[id].chunk.js",
        sourceMapFilename: '[file].map',
        path: path.resolve(__dirname, '../client')
    },
    prodWebsite: {
        filename: '[name].bundle.[chunkhash].js',
        publicPath: '',
        chunkFilename: '[id].[chunkhash].chunk.js',
        sourceMapFilename: '[file].map',
        path: path.resolve(__dirname, '../dist/website')
    },
    prodApp: {
        filename: '[name].bundle.[chunkhash].js',
        publicPath: '',
        chunkFilename: '[id].[chunkhash].chunk.js',
        sourceMapFilename: '[file].map',
        path: path.resolve(__dirname, '../dist/app')
    },
    prodCordova: {
        filename: '[name].bundle.[chunkhash].js',
        publicPath: '',
        chunkFilename: '[id].[chunkhash].chunk.js',
        sourceMapFilename: '[file].map',
        path: path.resolve(__dirname, '../dist/cordova')
    }
};