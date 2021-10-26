const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    dateCreation: Date,
    image: String,
    city: {
        type: String,
        required: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true
    },
    userId: String
});

module.exports = mongoose.model("Product", productSchema);