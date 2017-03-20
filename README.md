#  Webpack Starter

This is custom webpack (>2.x.x) starter/boilerplate built
from scratch to create web apps (PWA), Cordova apps and static websites from a common codebase.

## Supported languages
 - ES6 JavaScript
 - TypeScript (optional)
 - SASS
 - EJS/Lodash template for static content (e.g. templating, configuring index.html files)
 
## Overview & Code Organization

This boilerplate currently outputs three separate applications (if needed):

 - Web application with PWA (Progressive Web App) features
 - Cordova application for iOS and Android
 - Static website (e.g. can be your promo site)
 
Each _app_ (app and website) have a "standard" structure with folders for components, 
styles, images, services, templates. Shared code (SCSS/CSS, js services and templates) are located in the shared folder.

Components normally have a template along with js code (behavior)
and specific styles. The proposed structure (pictured below) should work great with Angular, React and 
static website (i.e. break the pages into templates, and import them).

```
│   package.json                        --> dependencies and build scripts
│   README.md
│   tsconfig.json                       --> boilerplate config for TypeScript, ouputs ES6
│   webpack.common.config.js            
│   webpack.dev.config.js               --> config for dev, serves app and website on port 9000
│   webpack.prod.app.config.js          --> prod build for web app
│   webpack.prod.cordova.config.js      --> prod build for cordova app
│   webpack.prod.website.config.js      --> prod build for website
│
├───client
│   ├───app                             --> web app, can be any SPA framework (see branches)
│   │   ├───components                  
│   │   ├───images                      --> images/**/* is copied to dist/app/images/
│   │   ├───styles                      --> SCSS/CSS folder for partials, mixins, variables...
│   │   ├───service-workers             --> service worker files
│   │   ├───services                    --> services for authentication, data...
│   │   └───templates                   --> HTML only templates (e.g. head, meta tags, footer...)
│   ├
│   ├───cordova
│   │   │   config.xml                  --> config for android and ios (plugins, options...)
│   │   └───www                         --> empty by default, cordova build will copy dist/cordova there
│   │           
│   ├───shared                          --> shared code between apps and the static website (e.g. styles, pure JS services...)
│   │   ├───images                      
│   │   ├───services
│   │   ├───styles
│   │   └───templates
│   │               
│   └───website                         --> static website, using ejs/lodash templates
│       ├───components                  
│       ├───images
│       ├───pages                       --> contrarily to SPA, static website can have multples pages (entries)
│       │   └───example-page
│       ├───service-workers
│       ├───services
│       ├───styles
│       └───templates
│                   
├───dist                                --> output folder for prod builds             
│    ├───app
│    ├───cordova
│    └───website
│
└───webpack-config                      --> webpack configuration
    │   dev-server.conf.js              --> dev build options (port, host, reload...)
    │   expose-libraries.conf.js        --> config for libs that expose global vars
    │   external-libraries.conf.js      --> config for libs loaded with <script> tags (e.g. from a CDN)
    │   loaders.conf.js                 --> loaders config for dev/prod
    │   output.conf.js                  --> outputs config (base path, dist folder location)
    │   plugins.conf.js                 --> plugins config for dev/prod
    │   source-map.conf.js              --> config for source-maps
    │   
    ├───custom-plugins                  --> custom plugins if any
    │       webpack.plugin.example.js
    │       
    ├───entries                         --> entries, one for SPA, multiple for static website
    │       app-entries.js
    │       cordova-entries.js
    │       dev-entries.js
    │       website-entries.js
    │       
    ├───loaders                         --> each loader in it's own file
    │       es6-babel.loader.js
    │       ...
    │       
    ├───plugins                         --> plugins config (minification, copy...)
    │       uglify.plugin.conf.js
    │       webpack-visualizer.plugin.conf.js
    │       ...
    │       
    └───utilities                       --> helper functions for build

```

## How to get started

Start dev mode with

```
npm start
```

App is served at `localhost:9000/app.html` and website is at `localhost:9000/website.html`

Default port is `9000`, dev-server options can be specified in `dev-server.conf.js`

To specify the host (useful when you use external devices) use
```
npm start -- --host=<your local ip>
```

Build all apps with 

```
npm run prod
```

Build specific app with 

```
npm run prod:app
npm run prod:cordova
npm run prod:website
```

The Cordova command copy `dist/cordova/` to `client/cordova/www` to be able to build the 
 

## Features

 - Dev setup to edit both the website and the app at the same time
 - Vendor bundle automatically created with anything imported/required outside `client/`
 - EJS/Lodash templates (e.g. for meta tags, footer, header, CSP, scripts...)
 - HTML minification for prod
 - CSS Modules setup that can be used with AngularJS, Angular, React, etc. BEM methodology is used for naming.
 - SCSS/CSS minification with working source maps
 - Import SASS variable to JS with `sass-variable-loader` (usefull for style guides)
 - JS minification with UglifyJS with source maps working (both `.ts` and ES6 `.js` files)
 - Webpack tree shaking works but not for all cases, see open issues for details
 - Comes with many useful Webpack plugins:
    - CommonsChunkPlugin
    - CopyPlugin
    - DuplicatePackageChecker
    - ExtractText (to output `.css` files)
    - HtmlPlugin to create HTML for each entry
    - UglifyJS plugin
    - WebpackVisualizerPlugin that produce a nice chart with information about your bundles

## Branches

 - `master` has no JS frameworks, just plain hello world examples
 - `angularjs-typescript` has AngularJS (v1.6.x) setup with TypeScript + RxJS
 - might add more in the future (e.g. Angular, React)

## Notes

Instead of UglifyJS, it's possible to use Google Closure Compiler
in this setup, check `closure-compiler.plugin.conf.js` for more details.

### See Also & Credits

http://www.favicon-generator.org/
https://tomitm.github.io/appmanifest/

