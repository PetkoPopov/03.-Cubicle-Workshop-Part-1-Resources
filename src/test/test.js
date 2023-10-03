const db = require('mongoose')
const {connString} = require('../constans/constans')

 db.connect(connString)
const sch = db.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    phone:Number,
    car:String
})
const Person = db.model('folderPetko'/**съзздава се папка  */,sch)
new Person({firstName:'Petko',lastName:'Popov',age:23,phone:899231574,car:'audi'}).save()


