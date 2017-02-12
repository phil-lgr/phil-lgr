# Overview (work in progress...)

This is a (yet another) custom webpack (>2.x.x) starter/boilerplate built
from scratch to create web apps (PWA), Cordova apps and static websites.

## Supported languages
 - ES6
 - TypeScript
 - SASS
 - EJS/Lodash template for static content (i.e. static pages or index.html files)

## Outputs

This boilerplate outputs three separate applications:

 - Web application with PWA (Progressive Web App) features
 - Cordova application for iOS and Android
 - Static website

## Features

 - Easy to add or remove entries for each app
 - Easy reuse services (think auth, data, notification) between the app and the website
 - Super easy to reuse SASS partials, utilities, mixins, having a common style guide
 - Super easy to reuse `HTML` templates (meta tags, footer, header, CSP, scripts) using EJS/Lodash templates
 - Dev setup to edit both the website and the app at the same time
 - HTML minification for prod
 - CSS Modules setup that can be used with AngularJS, Angular, React, etc. I use BEM methodology for naming.
 - SCSS/CSS minification with working source maps
 - Import SASS variable to JS with `sass-variable-loader` (usefull for style guides)
 - JS minification with UglifyJS with source maps working (both `.ts` and ES6 `.js` files)
 - Webpack tree shaking works but not for all cases, see open issues for details

## Branches

 - `master` has no JS frameworks, just plain hello world examples
 - `angularjs` for AngularJS (v1.6.x) setup with TypeScript + Rxjs
 - might add more in the future (e.g. Angular, React)

## Setup

 // TODO

## Development

Start dev mode with

```
npm start
```

Default port is `9000`, dev-server options can be specified in `dev-server.conf.js`

To specify the host use
```
npm start -- --host=localhost
```

## Notes

Instead of UglifyJS, it's possible to use Google Closure Compiler
in this setup, check `closure-compiler.plugin.conf.js` for more details.

