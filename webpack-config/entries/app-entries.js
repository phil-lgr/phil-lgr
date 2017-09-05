const path = require('path');
const utilities = require('../utilities/utilities');

let isDevServer = utilities.isWebpackDevServer();

module.exports = [
    {
        name: 'app',
        path: './client/app/app',
        template: './client/app/app.html',
        filename: isDevServer ? 'app.html' : 'index.html',
        chunks: ['vendor-app', 'app']
    }];
