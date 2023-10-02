const router = require('express').Router()
router.use('home',(req,res)=>{
    res.send('Wellcome home')
})
module.exports = router