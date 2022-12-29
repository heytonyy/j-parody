// import mongoose
const mongoose = require("mongoose")

const ExampleSchema = new mongoose.Schema({
    property1: {
        type: Number
    },
    property2: {
        type: String
    },
    property3: {
        type: String
    },
    property4: {
        type: String
    }
}, { timestamps: true })

module.exports.Example = mongoose.model("Example", ExampleSchema)