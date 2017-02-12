const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = new CopyWebpackPlugin([
    {
        context: 'client/app/images',
        from: '**/*',
        to: 'images'
    },{
        context: 'client/shared/images',
        from: '**/*',
        to: 'images'
    },{
        context: 'client/website/images',
        from: '**/*',
        to: 'images'
    },
    {
        from: 'client/*.txt',
        flatten: true
    }
]);