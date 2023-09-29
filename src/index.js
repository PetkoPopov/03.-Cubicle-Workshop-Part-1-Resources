const express = require('express')
const expressConfig = require('./config/expressConfig')
const port = 2222
const app = express()
const handlebarsConfig = require('./config/handlebarsConfig')

handlebarsConfig(app)
expressConfig(app)

app.get('/', (req, res) => {
    res.render('main', { layout: false })
})
app.get('/create', (req, res) => {
    res.render('../create', { layout: false })
})
app.get('/about', (req, res) => {
    res.render('../about', { layout: false })
})
app.listen(port, () => console.log('asd'))
