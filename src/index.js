const express = require('express')
const h = require('express-handlebars')
const path = require('path')
const port =2222
const app=express()
app.engine('hbs',h.engine({extname:'hbs'}))
app.set('view engine','hbs')
app.set('views' , 'src/views')
// const staticFiles = express.static(path.resolve(__dirname, 'views/public'))
//     or 
//     ||
//     \/
const staticFiles = express.static( 'src/views/public')
app.use(staticFiles)
app.get('/',(req,res)=>{
    res.render('index',{layout:false})
})
app.get('/create', (req, res) => {
    res.render('create', { layout: false })
})
app.get('/about', (req, res) => {
    res.render('about',{layout:false})
})
app.listen(port,()=>console.log('asd'))
