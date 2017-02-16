let libs = require('../expose-libraries.conf');
let exposeLoaders = [];

libs.forEach(lib => {
    exposeLoaders.push({
        test: require.resolve(lib.libName),
        use: `expose-loader?${lib.exposeName}`
    })
});

module.exports = exposeLoaders;