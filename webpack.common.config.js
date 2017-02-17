function CommonConfig() {
    return {
        target: "web",
        module: {
            rules: [...require('./webpack-config/loaders.conf').common]
        },
        plugins: [...require('./webpack-config/plugins.conf').common],
        resolve: {
            extensions: ['.js', '.json', '.ts'],
        },
    }
}

module.exports = CommonConfig;