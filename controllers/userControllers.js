const mongoose = require("mongoose")
const User = require("../models/User")

const getUserPage = (req, res) => {
    User.findOne({
        _id: req.params.id
    })
}
const handleSignup = (req, res) => {
    const user = new User({
        ...req.body
    })
    user.save()
        .then(user => {
            res.status(200).json({
                message: "User created ! ",
                user: user
            })
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({
                message: "User not created !",
                error: err
            })
        })
}
const handleLogin = (req, res) => {

}

module.exports = {
    getUserPage,
    handleSignup,
    handleLogin
}