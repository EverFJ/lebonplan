const express = require("express")
const router = express.Router()
const productsControllers = require("../controllers/productsController")

<<<<<<< HEAD
router.get("/", productsControllers.getAllProducts)
// Adding query params

router.get("/:id", productsControllers.getOneProduct)
router.get("/cities/:city", productsControllers.getProductsFromCity)
router.get("/name/:name", productsControllers.getProductsFromName)
=======
// router.get("/", productsControllers.getSearchedProducts)
// Adding query params

router.get("/:id", productsControllers.getOneProduct)
// router.get("/cities/:city", productsControllers.getProductsFromCity)
// router.get("/name/:name", productsControllers.getProductsFromName)
>>>>>>> 4e8666957115f07aeb8f27365f670a464677238e

module.exports = router