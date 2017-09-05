module.exports = {
    test: /\.html$/,
    loader: [{
        loader: 'ejs-loader'
    }, {
        loader: 'html-loader',
        query: {
            interpolate: 'require'
        }
    }]
};
