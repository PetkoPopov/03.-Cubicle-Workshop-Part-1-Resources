const router = require('express').Router()
const homeController = require('./controllers/homeController')
const cubeController = require('./controllers/cubeController')

router.use(homeController)//router.use('/home',...)
router.use('/',cubeController)


module.exports = router 