const utilities = require('./webpack-config/utilities/utilities');
const _ = require('lodash');

let CommonConfig = require('./webpack.common.config');

let configDev = new CommonConfig();

configDev.devServer = require('./webpack-config/dev-server.conf');

configDev.entry = utilities.mapArrayOfObjectPropToProp(require('./webpack-config/entries/dev-entries'), 'name', 'path');
configDev.output = require('./webpack-config/output.conf').dev;
configDev.externals = _.assign(configDev.externals,
    [
        utilities.mapArrayOfObjectPropToProp(require('./webpack-config/external-libraries.conf').app, 'name', 'importName'),
        utilities.mapArrayOfObjectPropToProp(require('./webpack-config/external-libraries.conf').website, 'name', 'importName')
    ]);
configDev.devtool = require('./webpack-config/source-map.conf').devtool.dev;
configDev.module.rules.push(...require('./webpack-config/loaders.conf').dev);
configDev.plugins.push(...require('./webpack-config/plugins.conf').dev);

module.exports = configDev;
