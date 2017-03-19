const utilities = require('./webpack-config/utilities/utilities');
const _ = require('lodash');

let CommonConfig = require('./webpack.common.config');

let configCordova = new CommonConfig();

// cordova build
configCordova.entry = utilities.mapArrayOfObjectPropToProp(require('./webpack-config/entries/cordova-entries'), 'name', 'path');
configCordova.output = require('./webpack-config/output.conf').prodCordova;
configCordova.externals = _.assign(configCordova.externals,
    [
        utilities.mapArrayOfObjectPropToProp(require('./webpack-config/external-libraries.conf').app, 'name', 'importName')
    ]);
configCordova.devtool = require('./webpack-config/source-map.conf').devtool.prod;
configCordova.module.rules.push(...require('./webpack-config/loaders.conf').prod);
configCordova.plugins.push(...require('./webpack-config/plugins.conf').prodCordova);

module.exports = [configCordova];