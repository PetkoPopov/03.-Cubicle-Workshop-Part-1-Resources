const mongoose = require("mongoose")
const mongooseSchema = new mongoose.Schema(
{
    name:String,
    imageUrl:String,
    difficultyLevel:String,
    description:String
}
)
module.exports = Cube = mongoose.model('cube',mongooseSchema)