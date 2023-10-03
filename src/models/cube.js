const mongoose = require("mongoose")
const mongooseSchema = new mongoose.Schema(
    {
        name: String,
        imageUrl: String,
        description: String,
        difficultyLevel: Number


    }
)
module.exports = Cube = mongoose.model('cube', mongooseSchema)