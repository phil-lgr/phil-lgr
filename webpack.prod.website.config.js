const utilities = require('./webpack-config/utilities/utilities');
const _ = require('lodash');

let CommonConfig = require('./webpack.common.config');

let configWebsite = new CommonConfig();

// website build
configWebsite.entry = utilities.mapArrayOfObjectPropToProp(require('./webpack-config/entries/website-entries'), 'name', 'path');
configWebsite.output = require('./webpack-config/output.conf').prodWebsite;
configWebsite.externals = _.assign(configWebsite.externals,
    [
        utilities.mapArrayOfObjectPropToProp(require('./webpack-config/external-libraries.conf').website, 'name', 'importName')
    ]);
configWebsite.devtool = require('./webpack-config/source-map.conf').devtool.prod;
configWebsite.module.rules.push(...require('./webpack-config/loaders.conf').prod);
configWebsite.plugins.push(...require('./webpack-config/plugins.conf').prodWebsite);

module.exports = [configWebsite];