const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    surName: String,
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profileImage: String,
});

module.exports = mongoose.model("User", userSchema);