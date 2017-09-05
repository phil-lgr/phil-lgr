const utilities = require('./webpack-config/utilities/utilities');

function CommonConfig() {
    return {
        target: "web",
        module: {
            rules: [...require('./webpack-config/loaders.conf').common]
        },
        plugins: [...require('./webpack-config/plugins.conf').common],
        externals: utilities.mapArrayOfObjectPropToProp(require('./webpack-config/external-libraries.conf').common, 'name', 'importName')
    }
}

module.exports = CommonConfig;