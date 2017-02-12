const _ = require('lodash');

function mapPropToObject(entries, prop) {
    let mappedEntries = {};
    _.map(entries, (entry) => {
        mappedEntries[entry.name] = entry[prop]
    });
    return mappedEntries;
}

function isWebpackDevServer() {
    return process.argv[1] && !! (/webpack-dev-server/.exec(process.argv[1]));
}

module.exports = {
    mapPropToObject: mapPropToObject,
    isWebpackDevServer: isWebpackDevServer,
};