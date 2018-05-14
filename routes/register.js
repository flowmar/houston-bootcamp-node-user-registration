'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import 'mysql';
import connection from '../public/js/sqlconfig';
import bcrypt from 'bcrypt';
const router = express.Router();
// const sampleData = require('../public/js/sampleData');

/**
 * Routes
 */

// Accept a post request
router.post('/register', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  let jsonData = req.body;
  console.log(jsonData);
  let userData = []
  // res.send(jsonData);
  for (var i = 0; i < jsonData.length; i++) {
    userData.push({
      email: jsonData.email,
      firstName: jsonData.firstName,
      lastName: jsonData.last - name,
      password: jsonData.password - confirmation,
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
  }

  res.send(jsonData, "\n\n\n\n\n", userData);
  // connection.query(
  //   'INSERT INTO users (email, firstName, lastName, password, gender, birthDate, zipCode, height, genderPreference, agePreferenceMin, agePreferenceMax, race, religion) VALUES ?',
  //   [userData],
  //   function(err, result) {
  //     if (err) {
  //       res.send('Error');
  //     } else {
  //       res.send('Success');
  //     }
  //   }
  // );
  // });
});
module.exports = router;