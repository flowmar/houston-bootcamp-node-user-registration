/**
 * Dependencies
 * */
// eslint-disable-next-line rule
const mysql = require('mysql');

// mySQL connection configuration
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'flowmar',
  password: 'flowwithme1',
  database: 'user_registration'
});

module.exports = connection;