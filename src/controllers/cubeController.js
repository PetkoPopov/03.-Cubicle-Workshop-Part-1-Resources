const router = require('express').Router()
const cubeService = require('../services/cubeService')

router.get('/create', (req, res) => {
    //cubes/
    res.render('create')
})
router.post('/create',async (req,res,)=>{
    // res.send('Hello ');
    
    const {name,description,imageUrl,difficultyLevel } = req.body
    await cubeService.create({name,description,imageUrl,difficultyLevel:Number(difficultyLevel)})
    res.redirect('/') 
})
module.exports = router 
