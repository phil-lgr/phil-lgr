function CommonConfig() {
    return {
        target: "web",
        module: {
            rules: [...require('./webpack-config/loaders.conf').common]
        },
        plugins: [...require('./webpack-config/plugins.conf').common],
    }
}

module.exports = CommonConfig;