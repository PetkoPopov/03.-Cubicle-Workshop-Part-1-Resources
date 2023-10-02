const express = require('express')
const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')
const router = require('./router') 
const port = 2222
const app = express()


handlebarsConfig(app)
expressConfig(app)
app.use(router)

app.get('/', (req, res) => {
    res.render('layouts/main',{layout:false})
})
app.get('/create', (req, res) => {
    res.render('create')//  src/views/create.hbs
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.listen(port, () => console.log('asd'))
