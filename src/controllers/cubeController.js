const router = require('express').Router()
const cubeService = require('../services/cubeService')
const { route } = require('./homeController')
router.get('/',(req,res)=>{
    res.render('index')
})
router.get('/create', (req, res) => {
    //cubes/
    res.render('create')
})
router.get('/details', (req, res) => {
    //cubes/
    res.render('details')
})
router.post('/create', async (req, res,) => {
    // res.send('Hello ');

    const { name, description, imageUrl, difficultyLevel } = req.body
    await cubeService.create({ name, description, imageUrl, difficultyLevel: Number(difficultyLevel) })
    res.redirect('/')
})
router.get('/cube/:cubeId', async (req, res) => {
    console.log('in controler ') 
    const { cubeId } = req.body
    const cube = await cubeService.getSingleCube(cubeId).lean()
// console.log(cube)
//
    if (!cube) {
        res.render('details',cube)
    }
res.render('details',{...cube})
//
})
router.get('/about', (req, res) => {
    res.render('about')
})
router.get('*', (req, res) => {
    res.render('404')
})
module.exports = router 
