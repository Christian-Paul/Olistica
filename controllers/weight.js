var express = require('express');
var router = express.Router();
var Weight = require('../models/weight');
var requireAuthentication = require("../middlewares/requireAuthentication");

router.get('/', requireAuthentication);

router.post('/add', requireAuthentication, function (req, res) {
  var userId = req.session.userId;
  var date = req.body.date;
  var weight = req.body.weight;

  console.log(date, weight);

  Weight.addNew(userId, date, weight, function (err, response) {
    if (err) {
      res.send({
        error: "Error adding weight"
      });
    } else {
      res.send({
        status: "success"
      })
    }
  });
});

router.get('/list', requireAuthentication, function (req, res) {
  var userId = req.session.userId;

  Weight.list(userId, function (err, list) {
    if (err) {
      console.log(err);
      res.send({
        error: err
      });
    } else {
      res.send({
        status: "success",
        list: list
      });
    }
  });
});

module.exports = router;
