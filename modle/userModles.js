const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {type: String},
    userpasswrod: {type: String}
})

const  UserModel =    mongoose.model("user",userSchema)

module.exports = UserModel
