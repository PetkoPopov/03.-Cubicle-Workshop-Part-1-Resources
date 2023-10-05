const router = require('express').Router()
const homeController = require('./controllers/homeController')//type router
const cubeController = require('./controllers/cubeController')//type router
const xcutterController = require('./controllers/xcutterConroller')
router.use('/home', homeController)//router.use('./SomePath',anotherRouter or from type router)
//router.use('/home',...)
router.use('/cube', cubeController)
router.use('/xcutter',xcutterController)

module.exports = router //send to index and everywhere else 