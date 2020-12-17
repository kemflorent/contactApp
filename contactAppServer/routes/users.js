var express = require('express');
var User = require("../models/usersModel");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  User.find()
  .then(function(users) {
    res.json(users);
  })
  .catch(function(err) {
    res.json(err);
  })
});

/* GET one user by id. */
router.get('/:userId', function(req, res) {
  var userId = req.params.userId;
  User.findById(userId).then(function(user){
    res.json(user);
  }).catch(function(err){
    res.json(err);
  });
});

/* POST user. */
router.post('/', function(req, res) {
  console.log("in post request");
  User.save(req.body)
    .then(function(user) {
      // If we were able to successfully create a User, send it back to the client
      res.json(user);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
  });

});

/* PUT user. */
router.put('/:userId', function(req, res) {
  var user = req.body;
  var userId = req.params.userId;
  User.findByIdAndUpdate(userId, user, {new: true}).then(function(user){
    res.json(user);
  }).catch(function(err){
    res.json(err);
  });
  
});

/* DELETE user. */
router.delete('/:userId', function(req, res) {
  var userId = req.params.userId;
  User.findByIdAndRemove(userId).then(function(user){
     const message = {
       message: 'user successfully deleted!',
       id: user._id
     };
     res.json(message);
  }).catch(function(err){
     res.json(err);
  });
});

module.exports = router;
