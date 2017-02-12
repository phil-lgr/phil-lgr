const utilities = require('./webpack-config/utilities/utilities');

let CommonConfig = require('./webpack.common.config');

let configWebsite = new CommonConfig();

// website build
configWebsite.entry = utilities.mapPropToObject(require('./webpack-config/entries/website-entries'), 'path');
configWebsite.output = require('./webpack-config/output.conf').prodWebsite;
configWebsite.devtool = require('./webpack-config/source-map.conf').devtool.prod;
configWebsite.module.rules.push(...require('./webpack-config/loaders.conf').prod);
configWebsite.plugins.push(...require('./webpack-config/plugins.conf').prodWebsite);

module.exports = [configWebsite];