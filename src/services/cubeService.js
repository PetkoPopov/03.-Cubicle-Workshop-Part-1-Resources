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
        if (from) {
            filterCubes = filterCubes.filter((cube) => {
                return cube.difficultyLevel >= from
            })
        }
        if (to) {
            filterCubes = filterCubes.filter((cube) => {
                return cube.difficultyLevel <= to
            })
        }
        return filterCubes
    }

}
exports.getSingleCube=(id)=>Cube.findById(id)
// console.log(Cube.findById("651c3f4185b8933345fefd31"))
// exports.module = {
// create,getAll
// }