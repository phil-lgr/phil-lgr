const _ = require('lodash');

function mapArrayOfObjectPropToProp(arrayOfObjects, propName, propValueName) {
    let mappedEntries = {};
    _.map(arrayOfObjects, (obj) => {
        mappedEntries[obj[propName]] = obj[propValueName]
    });
    return mappedEntries;
}

function isWebpackDevServer() {
    return process.argv[1] && !! (/webpack-dev-server/.exec(process.argv[1]));
}

module.exports = {
    mapArrayOfObjectPropToProp: mapArrayOfObjectPropToProp,
    isWebpackDevServer: isWebpackDevServer,
};