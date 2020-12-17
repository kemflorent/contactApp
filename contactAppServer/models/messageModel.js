// models/messageModel.js
const User = require('./usersModel');
const mongoose = require("../configs/db.config");

const schema = {
       message: { type: mongoose.SchemaTypes.String, required: true },
       userSource: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
       userDestination: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
};

const collectionName = 'messages';
const messageSchema = mongoose.Schema(schema, { timestamps: true });
const Message = mongoose.model(collectionName, messageSchema);

module.exports = Message;