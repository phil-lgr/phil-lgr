module.exports = {
    test: /\.(scss)$/,
    loader: [
        {
            loader: "style-loader"
        },
        {
            loader: "css-loader",
            query: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: '[name][local]'
            }
        }, {
            loader: "sass-loader",
            query: {
                sourceMap: true,
                sourceComments: true
            }
        }]
}