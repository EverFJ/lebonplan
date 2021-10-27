const express = require("express")
const router = express.Router()
const expressValidator = require("express-validator")
const UsersControllers = require("../controllers/userControllers")
const {
    validateConfirmPassword
} = require("../middlewares/validateConfirmPassword")
const multer = require("../middlewares/multerConfig")

router.get("/:id", UsersControllers.getUserPage)
router.post("/signup",
    expressValidator.body("email").isEmail(),
    [validateConfirmPassword],
    UsersControllers.handleSignup)
router.post("/:id/picture", UsersControllers.uploadProfilePicture)
router.post("/login", UsersControllers.handleLogin)

module.exports = router