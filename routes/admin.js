const express = require("express")
const router = express.Router()
const adminControllers = require("../controllers/adminControllers")

router.get("/:id", adminControllers.getProductPage)
router.post("/", adminControllers.createProduct)
router.put("/:id", adminControllers.updateProduct)
router.delete("/:id", adminControllers.deleteProduct)

module.exports = router