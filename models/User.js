const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    surName: String,
    firstName: String,
    userName: String,
    email:{type : String, unique: true, trim: true, lowercase: true},
    password: String,
    image: String,
});

module.exports  = mongoose.model("User", userSchema);