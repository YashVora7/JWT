const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        email:String,
        password:String,
        userId: {type:mongoose.Schema.Types.ObjectId}
    }
)

const userModel = new mongoose.model("User",userSchema)

module.exports = userModel