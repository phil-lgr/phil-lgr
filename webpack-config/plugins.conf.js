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

module.exports = {
    common: [
        copyPluginConf.common,
    ],
    dev: [
        // commonChunkPluginConf.dev,
        copyPluginConf.dev,
        loaderOptionsPluginConf.dev,
        ...htmlPluginConf.dev
    ],
    prodWebsite: [
        // commonChunkPluginConf.prod,
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
        // commonChunkPluginConf.prod,
        copyPluginConf.prodApp,
        loaderOptionsPluginConf.prod,
        ...htmlPluginConf.prodApp,
        extractTextPluginConf.prod,
        uglifyPluginConf,
        webpackVisualizerPlugin,
        duplicatePackageCheckerPluginConf
    ],
    prodCordova: [
        // commonChunkPluginConf.prod,
        copyPluginConf.prodCordova,
        loaderOptionsPluginConf.prod,
        ...htmlPluginConf.prodCordova,
        extractTextPluginConf.prod,
        uglifyPluginConf,
        webpackVisualizerPlugin,
        duplicatePackageCheckerPluginConf
    ]
};


