var express = require('express');
var User = require("../models/usersModel");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  User.find((err, users) => {
    if(err) return res.status(500).json(err);
    return res.status(200).json(users);
  });
});

/* GET one user by id. */
router.get('/:userId', function(req, res) {
  var userId = req.params.userId;
  User.findById(userId, (err, user) => {
    if(err) return res.status(500).json(err);
    return res.status(200).json(user);
  });

});

/* POST user. */
router.post('/', function(req, res) {
  var user = new User(req.body);
  user.save(err => {
    if(err) return  res.status(500).json(err);
    return res.status(200).json(user);
  });

});

/* PUT user. */
router.put('/:userId', function(req, res) {
  var user = req.body;
  var userId = req.params.userId;
  User.findByIdAndUpdate(userId, user, {new: true}, (err, user) => {
    if(err) return res.status(500).json(err);
    return res.status(200).json(user);
  });
  
});

/* DELETE user. */
router.delete('/:userId', function(req, res) {
  var userId = req.params.userId;
  User.findByIdAndRemove(userId, (err, user) => {
    if(err) return res.status(500).json(err);
    const response = {
      message: 'user successfully deleted!',
      id: user._id
    };
    return res.status(200).json(response);
  });

});

module.exports = router;
