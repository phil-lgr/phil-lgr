var path = require('path');

module.exports = {
    test: /\.(ts)$/,
    use: [{
        loader: 'babel-loader',
        options: {
            'plugins': ['lodash'],
            'presets': ['es2015']
        }
    }, {
        loader: 'ts-loader',
    }],
    exclude: /node_modules/,
};