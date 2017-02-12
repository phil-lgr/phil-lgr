const webpack = require('webpack');
const utilities = require('../utilities/utilities');
const entries = require('../entries/dev-entries');
const _ = require('lodash');

const commonChunks = _.filter(_.flatMap(entries, 'name'), (entryName) => {
    return entryName !== 'vendor'
});

function commonChunkPluginGenerator(name = 'common', chunks = [], hash = true) {
    return new webpack.optimize.CommonsChunkPlugin({
        name: name,
        filename: hash ? 'common.bundle.[hash].js' : 'common.bundle.js',
        chunks: chunks
    })
}

module.exports = {
    dev: commonChunkPluginGenerator('common', commonChunks, false /*hash*/),
    prod: commonChunkPluginGenerator('common', commonChunks, true /*hash*/)
};

