var express = require('express');
var User = require("../models/usersModel");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({})
  .then(function(users) {
    res.json(users);
  })
  .catch(function(err) {
    res.json(err);
  })
});

/* GET one user by id. */
router.get('/{id}', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST user. */
router.post('/', function(req, res, next) {
  console.log("in post request");
  User.create(req.body)
    .then(function(user) {
      // If we were able to successfully create a User, send it back to the client
      res.json(user);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
  });

});

/* POST user. */
router.put('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* DELETE user. */
router.delete('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
