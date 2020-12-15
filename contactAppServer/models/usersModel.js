// models/usersModel.js
const mongoose = require("../configs/db.config");
const schema = {
    name: { type: mongoose.SchemaTypes.String, required: true },
    email: { type: mongoose.SchemaTypes.String, required: true },
    phone: { type: mongoose.SchemaTypes.String, required: true },
    password: { 
        type: mongoose.SchemaTypes.String, 
        required: true,
        select: false 
    }
};
const collectionName = "user"; 
const userSchema = mongoose.Schema(schema);
const User = mongoose.model(collectionName, userSchema);

module.exports = User;