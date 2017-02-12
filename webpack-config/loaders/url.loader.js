module.exports = {
    test: /\.((svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(ico)$/,
    use: 'url-loader?limit=100000',
};