const express = require("express")
const router = express.Router()
const productsControllers = require("../controllers/productsController")

router.get("/", (req, res) => res.send("OK"))