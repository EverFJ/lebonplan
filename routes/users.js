const express = require("express")
const router = express.Router()
const UsersControllers = require("../controllers/userControllers")

router.get("/:id", UsersControllers.getUserPage)

module.exports = router