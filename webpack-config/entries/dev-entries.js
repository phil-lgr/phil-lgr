const path = require('path');
const websiteEntries = require('./website-entries');
const appEntries = require('./app-entries');

module.exports = [...websiteEntries, ...appEntries];