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
        chunks: ['website-vendor', 'website']
    }, {
        name: 'style-guide',
        path: './client/website/pages/style-guide/style-guide',
        template: './client/website/pages/style-guide/style-guide.html',
        filename: 'style-guide.html',
        chunks: ['website-vendor', 'style-guide']
    }, {
        name: 'portfolio',
        path: './client/website/pages/portfolio/portfolio',
        template: './client/website/pages/portfolio/portfolio.html',
        filename: 'portfolio.html',
        chunks: ['website-vendor', 'portfolio']
    }, {
        name: 'website-vendor',
        path: './client/website/website-vendor.ts'
    }];
