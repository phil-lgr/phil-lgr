var path = require('path');

module.exports = {
    test: /\.(ts)$/,
    loader: [
        {
            loader: "ng-annotate-loader",
            query: {
                cacheDirectory: true
            }
        },
        {
            loader: "babel-loader"
        },
        {
            loader: "ts-loader",
        }]
};