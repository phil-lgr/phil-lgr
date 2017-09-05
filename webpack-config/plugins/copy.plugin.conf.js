const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    common: new CopyWebpackPlugin([
        {
            context: 'client/shared/images',
            from: '**/*',
            to: 'images'
        }
    ]),
    dev: new CopyWebpackPlugin([
        {
            context: 'client/website/images',
            from: '**/*',
            to: 'images'
        },
        {
            context: 'client/app/images',
            from: '**/*',
            to: 'images'
        }
    ]),
    prodApp: new CopyWebpackPlugin([
        {
            context: 'client/app/images',
            from: '**/*',
            to: 'images'
        },
        {
            from: 'client/app/*.txt',
            flatten: true
        },
        {
            from: 'client/app/manifest.json',
            flatten: true
        }, {
            from: 'client/app/browserconfig.xml',
            flatten: true
        }
    ]),
    prodCordova: new CopyWebpackPlugin([
        {
            context: 'client/app/images',
            from: '**/*',
            to: 'images'
        }
    ]),
    prodWebsite: new CopyWebpackPlugin([
        {
            context: 'client/website/images',
            from: '**/*',
            to: 'images'
        },
        {
            from: 'client/website/*.txt',
            flatten: true
        }
    ])
};