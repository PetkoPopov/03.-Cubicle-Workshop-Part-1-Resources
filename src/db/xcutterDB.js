const mongoose = require('mongoose')
const { xcutterString } = require('../constans/constans')
const dbConnect = mongoose.connect(xcutterString)
if (dbConnect) {
    console.log("you are connected");
}
const xcutterSchema = mongoose.Schema({
    nameEmploee: String,
    date: Date,
    location: String,
    wage: Number,
    vacantion: Number,

})
const xcutterModel = mongoose.model('xcutterEmploee', xcutterSchema)

const xcutter = new xcutterModel({
    nameEmploee: 'petko 8',
    date: new Date(),
    location: 'err',
    wage: 234,
    vacantion: 31,

}).save()
const x = new mongoose.model('xcutterEmploee', xcutterSchema)
async function getX (){
     const xC = await x.findById("651e86aa23759a7ccba8f222").lean()
    console.log((xC.nameEmploee));

}
getX()

