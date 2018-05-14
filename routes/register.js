'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import 'mysql';
import connection from '../public/js/sqlconfig';
import bcrypt from 'bcrypt';
const router = express.Router();
const sampleData = require('../public/js/sampleData');

/**
 * Routes
 */

// Accept a post request
router
  .route('/register')
  .get(function (req, res) {
    res.send('Hello');
  })
  .post(function (req, res, err) {
    if (err) throw err;
    let jsonData = req.body;
    let userData = [];

    for (var i = 0; i < sampleData.length; i++) {
      userData.push([
        sampleData.email,
        sampleData.firstName,
        sampleData.lastName,
        sampleData.password,
        sampleData.gender,
        sampleData.birthDate,
        sampleData.zipCode,
        sampleData.height,
        sampleData.genderPreference,
        sampleData.agePreferenceMin,
        sampleData.agePreferenceMax,
        sampleData.race,
        sampleData.religion
      ]);
      res.send(sampleData);
    }

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
  });

module.exports = router;