const commonChunkPluginConf = require('./plugins/common-chunk.plugin.conf.js');
const htmlPluginConf = require('./plugins/html.plugin.conf.js');
const copyPluginConf = require('./plugins/copy.plugin.conf.js');
const loaderOptionsPluginConf = require('./plugins/loader-options.plugin.conf.js');
// prod only
const uglifyPluginConf = require('./plugins/uglify.plugin.conf.js');
const closureCompilerPluginConf = require('./plugins/closure-compiler.plugin.conf');
const extractTextPluginConf = require('./plugins/extract-text.plugin.conf.js');

module.exports = {
    common: [
        copyPluginConf,
    ],
    dev: [
        // commonChunkPluginConf.dev,
        loaderOptionsPluginConf.dev,
        ...htmlPluginConf.dev,
    ],
    prodWebsite: [
        // commonChunkPluginConf.prod,
        loaderOptionsPluginConf.prod,
        ...htmlPluginConf.prodWebsite,
        extractTextPluginConf.prod,
        // closureCompilerPluginConf
        uglifyPluginConf,
    ],
    prodApp: [
        // commonChunkPluginConf.prod,
        loaderOptionsPluginConf.prod,
        ...htmlPluginConf.prodApp,
        extractTextPluginConf.prod,
        uglifyPluginConf,
    ],
    prodCordova: [
        // commonChunkPluginConf.prod,
        loaderOptionsPluginConf.prod,
        ...htmlPluginConf.prodCordova,
        extractTextPluginConf.prod,
        uglifyPluginConf,
    ]
};


