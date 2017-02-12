const webpack = require('webpack');
const ClosureCompilerPlugin = require('webpack-closure-compiler');

const closureCompilerOptions =
    {
        compiler: {
            language_in: 'ECMASCRIPT6',
            language_out: 'ECMASCRIPT5',
            compilation_level: 'ADVANCED',
            warning_level: 'VERBOSE'
        },
        concurrency: 2,
    };

module.exports = new ClosureCompilerPlugin(closureCompilerOptions);

