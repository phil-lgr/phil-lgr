const utilities = require('./webpack-config/utilities/utilities');

let CommonConfig = require('./webpack.common.config');

let configCordova = new CommonConfig();

// cordova build
configCordova.entry = utilities.mapPropToObject(require('./webpack-config/entries/cordova-entries'), 'path');
configCordova.output = require('./webpack-config/output.conf').prodCordova;
configCordova.devtool = require('./webpack-config/source-map.conf').devtool.prod;
configCordova.module.rules.push(...require('./webpack-config/loaders.conf').prod);
configCordova.plugins.push(...require('./webpack-config/plugins.conf').prodCordova);

module.exports = [configCordova];