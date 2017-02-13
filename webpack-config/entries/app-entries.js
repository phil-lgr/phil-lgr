const path = require('path');
const utilities = require('../utilities/utilities');

let isDevServer = utilities.isWebpackDevServer();

module.exports = [
    // web application
    {
        name: 'app',
        path: './client/app/app.ts',
        template: './client/app/app.html',
        filename: isDevServer ? 'app.html' : 'index.html',
        chunks: ['app-vendor', 'app']
    }, {
        name: 'app-vendor',
        path: './client/app/app-vendor.ts'
    }];
