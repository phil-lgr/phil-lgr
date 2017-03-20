const _ = require('lodash');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const utilities = require('../utilities/utilities');
const devEntries = require('../entries/dev-entries');
const websiteEntries = require('../entries/website-entries');
const appEntries = require('../entries/app-entries');
const cordovaEntries = require('../entries/cordova-entries');

const minifyHtmlOptions = {
    prod: {
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true
    },
    dev: false
};

const devEntriesForHtmlPlugin = devEntries;
const appEntriesForHtmlPlugin = appEntries;
const websiteEntriesForHtmlPlugin = websiteEntries;
const cordovaEntriesForHtmlPlugin = cordovaEntries;

let htmlPluginConf = {
    dev: [],
    prodWebsite: [],
    prodApp: [],
    prodCordova: []
};

devEntriesForHtmlPlugin.forEach(entry => {
    htmlPluginConf.dev.push(htmlWebpackPluginGenerator(entry, minifyHtmlOptions.dev));
});

websiteEntriesForHtmlPlugin.forEach(entry => {
    htmlPluginConf.prodWebsite.push(htmlWebpackPluginGenerator(entry, minifyHtmlOptions.prod));
});

appEntriesForHtmlPlugin.forEach(entry => {
    htmlPluginConf.prodApp.push(htmlWebpackPluginGenerator(entry, minifyHtmlOptions.prod));
});

cordovaEntriesForHtmlPlugin.forEach(entry => {
    htmlPluginConf.prodCordova.push(htmlWebpackPluginGenerator(entry, minifyHtmlOptions.prod));
});

function htmlWebpackPluginGenerator(entry, minifyHtmlOptions) {
    return new HtmlWebpackPlugin({
        template: entry.template,
        chunks: entry.chunks ? entry.chunks : [],
        chunksSortMode: chunksSortMode,
        filename: entry.filename,
        inject: 'body',
        hash: false,
        isCordovaApp: !!entry.isCordovaApp,
        isDevServer: utilities.isWebpackDevServer(),
        minify: minifyHtmlOptions
    })
}

function chunksSortMode(chunk1, chunk2) {
    var orders = ['vendor-app', 'vendor-website', 'vendor-cordova'];
    var order1 = orders.indexOf(chunk1.names[0]);
    var order2 = orders.indexOf(chunk2.names[0]);
    if (order1 < order2) {
        return 1;
    } else if (order1 > order2) {
        return -1;
    } else {
        return 0;
    }
}

function filterVendorEntry(entries) {
    return _.filter(entries, (entry) => {
        return entry.name.search('vendor') === -1;
    });
}

module.exports = {
    dev: htmlPluginConf.dev,
    prodWebsite: htmlPluginConf.prodWebsite,
    prodApp: htmlPluginConf.prodApp,
    prodCordova: htmlPluginConf.prodCordova
};

