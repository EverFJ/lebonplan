const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    surName: String,
    firstName: String,
    userName: {type : String , required: true},
    email:{type : String, unique: true, trim: true, lowercase: true, required: true},
    password:{type : String , required: true},
    image: String,
});

module.exports  = mongoose.model("User", userSchema);