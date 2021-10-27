const multer = require("multer")

const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpeg",
    "image/png": "png"
}

const storage = multer.diskStorage({
    destination: "images",
    filename: (req, file, cb) => {
        const name = file.originalname.split(" ").join("_")
        const ext = MIME_TYPES[file.mimetype]
        console.log(`MULTER CONFIG name`, name)
        console.log(`MULTER CONFIG ext`, ext)
        cb(null, name + Date.now() + "." + ext)
    }
})

module.exports = multer({
    storage: storage
}).single("image")