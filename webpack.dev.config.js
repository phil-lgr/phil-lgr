const utilities = require('./webpack-config/utilities/utilities');

let CommonConfig = require('./webpack.common.config');

let configDev = new CommonConfig();

configDev.devServer = require('./webpack-config/dev-server.conf');

configDev.entry = utilities.mapPropToObject(require('./webpack-config/entries/dev-entries'), 'path');
configDev.output = require('./webpack-config/output.conf').dev;
configDev.devtool = require('./webpack-config/source-map.conf').devtool.dev;
configDev.module.rules.push(...require('./webpack-config/loaders.conf').dev);
configDev.plugins.push(...require('./webpack-config/plugins.conf').dev);

module.exports = configDev;
