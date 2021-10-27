const express = require("express")
const router = express.Router()
const productsControllers = require("../controllers/productsController")

router.get("/", productsControllers.getAllProducts)
router.post("/", productsControllers.HandleSearchedProducts)
router.get("/:id", productsControllers.getOneProduct)


module.exports = router