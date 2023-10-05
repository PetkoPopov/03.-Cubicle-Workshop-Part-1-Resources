// const router = require('express').Router()
const router = require('express').Router()

router.get('/home',(req,res)=>{

    res.render('about',{"name":"petko","age":34,"ocupation":"workless"})
})
module.exports = router