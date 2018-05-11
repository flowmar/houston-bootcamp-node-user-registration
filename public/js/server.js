'use strict';
/**
 *  Dependencies
 */
import express from 'express';
import path from 'path';
import logger from 'morgan';
import router from '../../routes/register';

/**
 *  Express Set Up
 */

// Create an instance of express
const app = express();

// Set up the logger
app.use(logger('combined'));

// Set the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'Public" folder
app.use(express.static('public'));

// Set the 'port' attribute for the express instance
app.set('port', process.env.PORT || 3003);

// Listen on the assigned port and print confirmation to the console
app.listen(app.get('port'), function() {
  console.log('Server started on port ' + app.get('port') + '.');
});

// Render the index page when the '/' route is hit
app.get('/', function(req, res) {
  res.render('index');
});

app.use('/register', router);
