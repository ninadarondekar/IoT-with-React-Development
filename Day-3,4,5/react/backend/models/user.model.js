const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        // maxlength: [6, "Name cannot exceed 6 characters"]
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    // role: {
    //     type: String,
    //     enum: ["user", "admin"],
    //     default: "user"
    // }

}, {
    timestamps: true
})

const user = mongoose.model("Users", userSchema)

module.exports = user