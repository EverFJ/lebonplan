const express = require("express")
const router = express.Router()
const adminControllers = require("../controllers/adminControllers")

router.post("/", adminControllers.createProduct)

module.exports = router