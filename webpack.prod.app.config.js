const utilities = require('./webpack-config/utilities/utilities');
const _ = require('lodash');

let CommonConfig = require('./webpack.common.config');

let configApp = new CommonConfig();

// web app build
configApp.entry = utilities.mapArrayOfObjectPropToProp(require('./webpack-config/entries/app-entries'), 'name', 'path');
configApp.output = require('./webpack-config/output.conf').prodApp;
configApp.externals = _.assign(configApp.externals,
    [
        utilities.mapArrayOfObjectPropToProp(require('./webpack-config/external-libraries.conf').app, 'name', 'importName')
    ]);
configApp.devtool = require('./webpack-config/source-map.conf').devtool.prod;
configApp.module.rules.push(...require('./webpack-config/loaders.conf').prod);
configApp.plugins.push(...require('./webpack-config/plugins.conf').prodApp);

module.exports = [configApp];

