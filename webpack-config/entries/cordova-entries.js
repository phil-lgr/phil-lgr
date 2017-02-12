const path = require('path');

module.exports = [
    // cordova application
    {
        name: 'cordova',
        path: './client/app/app',
        template: './client/app/app.html',
        filename: 'index.html',
        isCordovaApp: true,
        chunks: ['cordova-vendor', 'cordova']
    }, {
        name: 'cordova-vendor',
        path: './client/app/app-vendor'
    }];
