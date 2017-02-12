var path = require('path');

module.exports = {
    test: /\.(ts)$/,
    loader: [
        {
            loader: "babel-loader"
        },
        {
            loader: "ts-loader",
        }]
};