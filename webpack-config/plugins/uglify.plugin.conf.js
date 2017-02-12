const webpack = require('webpack');

// configured so tree shaking works
const uglifyJsOptions = {
    compress: {
        warnings: true,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        passes: 1,
        join_vars: true,
    },
    sourceMap: true,
    output: {
        comments: false
    },
};

module.exports = new webpack.optimize.UglifyJsPlugin(uglifyJsOptions);

