const WebpackVisualizerPlugin = require('webpack-visualizer-plugin');

const utilities = require('../utilities/utilities');

let isDevServer = utilities.isWebpackDevServer();

module.exports = new WebpackVisualizerPlugin({
    filename: './webpack-visualizer-stats.html'
});

