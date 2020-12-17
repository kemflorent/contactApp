// models/messageModel.js
const mongoose = require("../configs/db.config");
const schema = {
       message: { type: mongoose.SchemaTypes.String, required: true }
};

const collectionName = 'messages';
const messageSchema = mongoose.Schema(schema);
const Message = mongoose.model(collectionName, messageSchema);

module.exports = Message;