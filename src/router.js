const router = require('express').Router()
const homeController = require('./controllers/homeController')
const cubeController = require('./controllers/cubeController')
// const { Router } = require('express')
router.use(homeController)
router.use('/cube',cubeController)
router.get('/create', (req, res) => {
    res.render('create')//  src/views/create.hbs
})
router.get('/about', (req, res) => {
    res.render('about')
})
router.get('/', (req, res) => {
    res.render('layouts/main', { layout: false })
})
router.get('*',(req,res)=>{
    res.render('404')
})
module.exports = router 