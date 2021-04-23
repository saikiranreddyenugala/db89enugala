const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
    universityname: {
        type: String,
        required: [true, "universityname is Required"]
    },
    degree: {
        type: String,
        required: [true, "degree is Required"]
    },
    
    fee:{
        type: Number,
        min:[1000,"fee of university should be minimum of 1000$"],
        max:[5000,"Fee of university cannot be more than 5000$"]
    }
})
module.exports = mongoose.model("University", costumeSchema)