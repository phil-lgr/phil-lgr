const commonChunkPluginConf = require('./plugins/common-chunk.plugin.conf.js');
const htmlPluginConf = require('./plugins/html.plugin.conf.js');
const copyPluginConf = require('./plugins/copy.plugin.conf.js');
const duplicatePackageCheckerPluginConf = require('./plugins/duplicate-package-checker.plugin.conf');
const loaderOptionsPluginConf = require('./plugins/loader-options.plugin.conf.js');
// prod only
const uglifyPluginConf = require('./plugins/uglify.plugin.conf.js');
const closureCompilerPluginConf = require('./plugins/closure-compiler.plugin.conf');
const extractTextPluginConf = require('./plugins/extract-text.plugin.conf.js');
const webpackVisualizerPlugin = require('./plugins/webpack-visualizer.plugin.conf');
const contextReplacementPlugin = require('./plugins/context-replacement.plugin.conf.js');

module.exports = {
    common: [
        copyPluginConf.common,
        contextReplacementPlugin
    ],
    dev: [
        commonChunkPluginConf.app,
        commonChunkPluginConf.website,
        copyPluginConf.dev,
        loaderOptionsPluginConf.dev,
        ...htmlPluginConf.dev
    ],
    prodWebsite: [
        commonChunkPluginConf.website,
        copyPluginConf.prodWebsite,
        loaderOptionsPluginConf.prod,
        ...htmlPluginConf.prodWebsite,
        extractTextPluginConf.prod,
        // closureCompilerPluginConf
        uglifyPluginConf,
        webpackVisualizerPlugin,
        duplicatePackageCheckerPluginConf
    ],
    prodApp: [
        commonChunkPluginConf.app,
        copyPluginConf.prodApp,
        loaderOptionsPluginConf.prod,
        ...htmlPluginConf.prodApp,
        extractTextPluginConf.prod,
        uglifyPluginConf,
        webpackVisualizerPlugin,
        duplicatePackageCheckerPluginConf
    ],
    prodCordova: [
        commonChunkPluginConf.cordova,
        copyPluginConf.prodCordova,
        loaderOptionsPluginConf.prod,
        ...htmlPluginConf.prodCordova,
        extractTextPluginConf.prod,
        uglifyPluginConf,
        webpackVisualizerPlugin,
        duplicatePackageCheckerPluginConf
    ]
};


