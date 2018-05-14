'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import 'mysql';
import connection from '../public/js/sqlconfig';
import bcrypt from 'bcrypt';
const router = express.Router();

let userData = [];

/**
 * Routes
 */

// Accept a post request
router.post('/register', function (req, res, next) {

  // Set the response header
  res.setHeader('Content-Type', 'application/json');

  // Place the request body into a variable
  let jsonData = req.body;

  // Push the user's information to an array
  userData.push({
    email: jsonData.email,
    firstName: jsonData.firstName,
    lastName: jsonData.lastName,
    password: jsonData.password,
    gender: jsonData.gender,
    birthDate: jsonData.birthDate,
    zipCode: jsonData.zipCode,
    height: jsonData.height,
    genderPreference: jsonData.genderPreference,
    agePreferenceMin: jsonData.agePreferenceMin,
    agePreferenceMax: jsonData.agePreferenceMax,
    race: jsonData.race,
    religion: jsonData.religion
  });
  next();
}, function (req, res, next) {

  // Hash the user's password before storage
  let password = userData[0].password;

  bcrypt.hash(password, 10, function (err, hash) {
    userData[0]["password"] = hash;
    console.log(userData[0]);
  });
  res.send("User created!");
  next();
}, function (req, res) {

  // Save the user's data to the database
  connection.query(
    'INSERT INTO users (email,firstName,lastName,password,gender,birthDate,zipCode,height,genderPreference,agePreferenceMin,agePreferenceMax,race,religion) VALUES ?', userData,
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send('Success');
      }
    }
  );
});

module.exports = router;