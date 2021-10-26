const mongoose = require("mongoose")
const Product = require("../models/Product")

const createProduct = (req, res) => {
    const product = new Product({
        ...req.body
    })
    product.save()
        .then(product => {
            res.status(200).json({
                message: "Product created !",
                product: product
            })
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({
                message: "Error while creating product !",
                error: err
            })
        })

}
const getProductPage = (req, res) => {
    Product.findOne({
            _id: req.params.id
        })
        .then(product => {
            res.status(200).json({
                product: product
            })
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({
                error: err
            })
        })


}
const updateProduct = (req, res) => {
    Product.findOne({
            _id: req.params.id
        }, {
            ...req.body,
            _id: req.params.id
        })
        .then(product => {
            res.status(200).json({
                message: "Product updated",
                product: product
            })
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({
                message: "Error while creating product",
                error: err
            })
        })

}
const deleteProduct = (req, res) => {
    Product.deleteOne({
            _id: req.params.id
        })
        .then(product => {
            res.status(200).json({
                message: "Product deleted !",
                product: product
            })

        })
        .catch(err => {
            console.error(err)
            res.status(500).json({
                message: "Error while deleting product",
                error: err
            })
        })

}

module.exports = {
    createProduct,
    getProductPage,
    updateProduct,
    deleteProduct
}