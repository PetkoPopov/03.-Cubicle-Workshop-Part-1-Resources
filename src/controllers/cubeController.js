const router = require('express').Router()
const cubeService = require('../services/cubeService')

router.get('/', (req, res) => {
    res.render('index')
})
router.get('/create', (req, res) => {
    //cubes/
    res.render('create')
})
router.get('/cube/details', (req, res) => {
    //cubes/
    const data = req.params._id
    const cube = cubeService.getSingleCube(data)
    
    res.render('details',  cube )
})
router.post('/create', async (req, res,) => {
    // res.send('Hello ');

    const { name, description, imageUrl, difficultyLevel } = req.body
    await cubeService.create({ name, description, imageUrl, difficultyLevel: Number(difficultyLevel) })
    res.redirect('/cube')
})
router.get('/details/:cubeId', (req, res) => {
    const id = req.params.cubeId
    const cube = cubeService.getSingleCube(id).lean()
    res.render('details', cube)
})
router.get('/about', (req, res) => {
    res.render('about')
})
router.get('*', (req, res) => {
    res.render('404')
})
module.exports = router 
