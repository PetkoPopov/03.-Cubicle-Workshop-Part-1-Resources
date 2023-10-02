const router = require('express').Router()
router.use('/home',(req,res)=>{

    res.render('about',{"name":"petko","age":34,"ocupation":"workless"})
})
module.exports = router