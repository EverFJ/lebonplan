const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    dateCreation: Date,
    image: String,
    city: String,
    prix: Number,
});

module.exports = mongoose.model("Product", productSchema);