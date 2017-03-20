const path = require('path');
const utilities = require('../utilities/utilities');

let isDevServer = utilities.isWebpackDevServer();

module.exports = [
    // static website
    {
        name: 'website',
        path: './client/website/website',
        template: './client/website/website.html',
        filename: isDevServer ? 'website.html' : 'index.html',
        chunks: ['vendor-website', 'website']
    }, {
        name: 'example-page',
        path: './client/website/pages/example-page/example-page',
        template: './client/website/pages/example-page/example-page.html',
        filename: 'example-page.html',
        chunks: ['vendor-website', 'example-page']
    }];
