const xcutter = require('../services/xcutterService')
const router = require('express').Router()
router.use('/demo',(req,res)=>{
res.send('Wlcome in XCUTTER DEMO')
})
module.exports=router