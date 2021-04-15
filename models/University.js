const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
    universityname: String,
    degree: String,
    fee: Number
})
module.exports = mongoose.model("University", costumeSchema)