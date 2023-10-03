const uId = require("uniqid")
const Cube = require('../models/cube.js')
// Cube is mongoose Model 
const cubes = []
exports.create = async (data) => {
    // const cube = new Cube.create(data)
    //  second variant
     const cube = new Cube(data)
     cube.save()
    return cube
}
exports.getAll = (search, from, to) => {
    let filterCubes = [...cubes]
    if (search) {
        filterCubes = filterCubes.filter((cube) => {
            return cube.name.toLowerCase().includes(search)
        })
        return filterCubes
    }

}
// exports.module = {
// create,getAll
// }