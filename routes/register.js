'use strict';

import express from 'express';
const app = express();
const router = express.Router();

/**
 * Routes
 */

// // Display the home page
router.route('/').get(function(req, res) {
  res.render('index');
});

// Accept a post request
router.route('/register').get(function(req, res) {
  res.render('register');
});

module.exports = router;
