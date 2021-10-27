const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
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
    SellerUsername: String
});

module.exports = mongoose.model("Product", productSchema);