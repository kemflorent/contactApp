var express = require('express');
var Message = require('../models/messageModel');
var router = express.Router();

/**
 * Get all messages
 */
router.get('/', function(req, res){
   Message.find()
                  .then((message) => res.json(message))
                  .catch((err) => res.json(err));
})

/**
 * create a new message
 */
router.post('/', function(req, res){
    Message.save(req.body).then((message) => res.json(message))
                          .catch((err) => res.json(err));
})

/**
 * Update existing message
 */
router.put('/:messageId', function(req, res){
    Message.findByIdAndUpdate(req.params.messageId, req.body, {new: true}).then((message) => res.json(message))
    .catch((err) => res.json(err));
})

/**
 * Get One message by Id
 */
router.get('/:messageId', function(req, res){
    Message.findById(req.params.messageId).then((message) => res.json(message))
    .catch((err) => res.json(err));
})

/**
 * Delete existing message
 */
router.delete('/:messageId', function(req, res){
    Message.findByIdAndRemove(req.params.messageId)
                    .then(function(message){ 
                        const response = { 
                            message: 'message successfully deleted!',
                            id: message._id
                         };
                    }).catch((err) => res.json(err));
})

// Find message by criteria
// .findOne({name: 'toto', owner: 'titi'}, { name: true, owner: true}).then
// .find({name: 'toto', owner: 'titi'}).then

module.exports = router;