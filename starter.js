'use strict';
// Require Babel to allow use of ES6
require('babel-register')({
  presets: ['env']
});

// Include server.js
module.exports = require('./public/js/server');
