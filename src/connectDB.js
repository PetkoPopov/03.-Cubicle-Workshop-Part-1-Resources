const mongoose = require("mongoose")
const { connString} = require("./constans/constans")
async function dbConnect() {
    await mongoose.connect(connString);
}
//
module.exports = dbConnect