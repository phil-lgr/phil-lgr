module.exports = {
    common: [
        require('./loaders/es6-babel.loader.js'),
        require('./loaders/es6-babel-typescript.loader.js'),
        require('./loaders/file.loader.js'),
        require('./loaders/url.loader.js'),
        ...require('./loaders/expose.loader.js')],
    dev: [
        // TODO
        // const autoprefixer = require('autoprefixer');
        require('./loaders/inline-css.loader.js'),
        require('./loaders/inline-scss.loader.js'),
    ],
    prod: [
        require('./loaders/extract-css.loader.js'),
        require('./loaders/extract-scss.loader.js')]
};