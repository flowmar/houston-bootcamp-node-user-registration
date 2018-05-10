'use strict';
/**
 * Routes
 */

// Display the home page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Accept a post request
// app.post('/register', function(req, res) {
//   res.json('');
// });
