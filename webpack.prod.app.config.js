const utilities = require('./webpack-config/utilities/utilities');

let CommonConfig = require('./webpack.common.config');

let configApp = new CommonConfig();

// web app build
configApp.entry = utilities.mapPropToObject(require('./webpack-config/entries/app-entries'), 'path');
configApp.output = require('./webpack-config/output.conf').prodApp;
configApp.devtool = require('./webpack-config/source-map.conf').devtool.prod;
configApp.module.rules.push(...require('./webpack-config/loaders.conf').prod);
configApp.plugins.push(...require('./webpack-config/plugins.conf').prodApp);

module.exports = [configApp];

