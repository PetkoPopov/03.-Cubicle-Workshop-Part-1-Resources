const router = require('express').Router()

router.get('/all', (req, res) => {
    //cubes/
    res.send(' hello from all cubes dude ')
})
module.exports = router 
