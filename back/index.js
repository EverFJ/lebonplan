require('dotenv').config({
    path: '.env'
})
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const {
    PORT,
    URI
} = process.env
const productsRoutes = require("./routes/products")
const adminRoutes = require("./routes/admin")
const usersRoutes = require("./routes/users")
const path = require("path")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use("/images", express.static(path.join(__dirname, "images")))
app.use("/users", usersRoutes)
app.use("/products", productsRoutes)
app.use("/admin", adminRoutes)

mongoose.connect(URI, (err) => {
    if (err) {
        console.log(`Error while connecting to ${URI}`)
        console.error(err)
        process.exit(1)
    }
    console.log(`Mongoose connected to ${URI}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})