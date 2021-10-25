const mongoose = require("mongoose")

const getAllProducts = (req, res) => {
    Product.find()
        .then(products => {
            res.status(200).json({
                products
            })
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
            res.status(200).json({
                product
            })
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
    getOneProduct
}