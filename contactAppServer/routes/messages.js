var express = require('express');
var Message = require('../models/messageModel');
var router = express.Router();

/**
 * Get all messages
 */
router.get('/', function(req, res){
   Message.find((err, message) => {
       if(err) return res.status(500).json(err);
       return res.status(200).json(message);
   });
})

/**
 * create a new message
 */
router.post('/', function(req, res){
    var message = new Message(req.body);
    message.save(err => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(message);
    });
})

/**
 * Update existing message
 */
router.put('/:messageId', function(req, res){
    Message.findByIdAndUpdate(req.params.messageId, req.body, {new: true}, (err, message) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(message);
    });
})

/**
 * Get One message by Id
 */
router.get('/:messageId', function(req, res){
    Message.findById(req.params.messageId, (err, message) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(message); 
    });
})

/**
 * Delete existing message
 */
router.delete('/:messageId', function(req, res){
    Message.findByIdAndRemove(req.params.messageId, (err, message) => {
        if(err) return res.status(500).json(err);
        const response = { 
            message: 'message successfully deleted!',
            id: message._id
        };
        return res.status(200).json(response); 
    });
})

// Find message by criteria
// .findOne({name: 'toto', owner: 'titi'}, { name: true, owner: true}).then
// .find({name: 'toto', owner: 'titi'}).then

module.exports = router;