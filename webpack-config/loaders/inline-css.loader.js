module.exports = {
    test: /\.(css)$/,
    loader: [
        {
            loader: "style-loader"
        },
        {
            loader: "css-loader"
        }]
};