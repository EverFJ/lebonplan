const express = require("express")
const router = express.Router()
const adminControllers = require("../controllers/adminControllers")
const multer = require("../middlewares/multerConfig")
const authGarg = require("../middlewares/authGard")

router.get("/:id", authGarg, adminControllers.getProductPage)
router.post("/", authGarg, multer, adminControllers.createProduct)
router.put("/:id", authGarg, multer, adminControllers.updateProduct)
router.delete("/:id", authGarg, adminControllers.deleteProduct)

module.exports = router