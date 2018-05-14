'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import 'mysql';
import connection from '../public/js/sqlconfig';
const uploadProfile = express.Router();

uploadProfile.post('/uploadProfile', function (req, res) {
    var file = req.files.uploaded_image;
    var img_name = file.name;

    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

      file.mv('public/images/upload_images/' + file.name, function (err) {

        if (err)
          return res.send(err);
        var sql = "INSERT INTO `images`(`image`) VALUES (`file`)";

        var query = db.query(sql, function (err, result) {
          res.send('Successfully uploaded image!');
        });
      });
    }
  }

);

module.exports = uploadProfile;