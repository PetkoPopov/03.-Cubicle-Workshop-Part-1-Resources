const router = require('express').Router()

router.get('/template', (req, res) => {
    //cubes/
    res.render('partials/cubeTemplate')
})
module.exports = router 
