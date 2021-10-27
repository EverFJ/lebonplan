const mongoose = require("mongoose")
const Product = require("../models/Product")

const getAllProducts = (req, res) => {
    Product.find()
        .then(products => {
            res.status(200).json(products)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({
                error: err
            })
        })
}

const HandleSearchedProducts = (req, res) => {
    let searchRequest = {}
    if (req.body.name) {
        searchRequest.name = req.body.name
    }
    if (req.body.city) {
        searchRequest.city = req.body.city
    }
    if (req.body.price) {
        {
            $lte: req.body.price
        }

    }

    Product.find(searchRequest)
        .then(products => {
            if (products.length === 0) {
                res.status(200).json({
                    message: "No products matching your search"
                })
            }
            res.status(200).json(products)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({
                err
            })
        })
}


const getOneProduct = (req, res) => {
    Product.findOne({
            _id: req.params.id
        })
        .then(product => {
            res.status(200).json(product)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({
                err
            })
        })
}

const getProductsFromCity = (req, res) => {
    Product.find({
            city: req.params.city
        })
        .then(products => {
            if (products.length === 0) {
                res.status(200).json({
                    message: "No products from " + req.params.city
                })
            }
            res.status(200).json(products)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({
                err
            })
        })
}

const getProductsFromName = (req, res) => {
    Product.find({
            name: req.params.name
        })
        .then(products => {
            if (products.length === 0) {
                res.status(200).json({
                    message: "No products corresponding to " + req.params.name
                })
            }
            res.status(200).json(products)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({
                err
            })
        })
}

module.exports = {
    getAllProducts,
    getOneProduct,
    getProductsFromCity,
    getProductsFromName,
    HandleSearchedProducts
}