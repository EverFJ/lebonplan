const express = require("express")
const router = express.Router()
const productsControllers = require("../controllers/productsController")

router.get("/", productsControllers.getAllProducts)
// Adding query params

router.get("/:id", productsControllers.getOneProduct)
// router.get("/cities/:city", productsControllers.getProductsFromCity)
// router.get("/name/:name", productsControllers.getProductsFromName)

module.exports = router