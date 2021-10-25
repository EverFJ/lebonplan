const express = require("express")
const router = express.Router()
const productsControllers = require("../controllers/productsController")

router.get("/", productsControllers.getAllProducts)
router.get("/:id", productsControllers.getOneProduct)
router.get("/cities/:city", productsControllers.getOneProduct)

module.exports = router