const webpack = require('webpack');
const path = require('path');
const utilities = require('../utilities/utilities');
const appEntries = require('../entries/app-entries');
const websiteEntries = require('../entries/website-entries');
const cordovaEntries = require('../entries/cordova-entries');
const _ = require('lodash');

const appChunks = _.flatMap(appEntries, 'name');
const websiteChunks = _.flatMap(websiteEntries, 'name');
const cordovaChunks = _.flatMap(cordovaEntries, 'name');

function commonChunkPluginGenerator(name, chunks, hash = true) {
    return new webpack.optimize.CommonsChunkPlugin({
        name: name,
        filename: hash ? `${name}.bundle.[hash].js` : `${name}.bundle.js`,
        chunks: chunks,
        minChunks: function (module, count) {
            return module.context && module.context.indexOf("client") === -1;
        }
    })
}

module.exports = {
    website: commonChunkPluginGenerator('vendor-website', websiteChunks, true /*hash*/),
    app: commonChunkPluginGenerator('vendor-app', appChunks, true /*hash*/),
    cordova: commonChunkPluginGenerator('vendor-cordova', cordovaChunks, true /*hash*/)
};

