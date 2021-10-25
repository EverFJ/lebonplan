const express = require("express")
const router = express.Router()
const UsersControllers = require("../controllers/userControllers")

router.get("/:id", UsersControllers.getUserPage)
router.post("/signup", UsersControllers.handleSignup)
router.post("/login", UsersControllers.handleLogin)

module.exports = router