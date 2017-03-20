var path = require('path');

module.exports = {
    test: /\.(js)$/,
    use: [{
        loader: 'babel-loader',
        options: {
            'plugins': ['lodash'],
            'presets': ['es2015']
        }
    }],
    exclude: /node_modules/,
};