const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const {
    JWT_SECRET
} = process.env
const User = require("../models/User")

const getUserPage = (req, res) => {
    User.findOne({
            _id: req.params.id
        })
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({
                error: err
            })
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
    User.findOne({
            email: req.body.email,
            password: req.body.password
        })
        .then(user => {
            res.status(200).json({
                userId: user._id,
                token: jwt.sign({
                    userId: user._id
                }, JWT_SECRET, {
                    expiresIn: "24h"
                })
            })
        })
        .catch(err => {
            console.error(err)
            res.status(401).json({
                error: "User not found"
            })
        })

}

const uploadProfilePicture = (req, res) => {
    if (req.file) {
        const userId = req.params.id;
        User.updateOne({
            _id: userId
        }, {
            $set: {
                profileImage: '/' + req.file.filename
            }
        }).then(response => {
            res.status(200).json(response);
        }).catch(error => {
            console.error(error);
            res.status(500).json(error);
        });
    } else {
        console.log('ERR');
        res.status(500).json(new Error('Vous devez envoyer une photo').message);
    }
}

module.exports = {
    getUserPage,
    handleSignup,
    handleLogin,
    uploadProfilePicture
}