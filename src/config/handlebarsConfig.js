const h = require('express-handlebars')
const handlebarConfig = (app) => {
    app.engine('hbs', h.engine({ extname: 'hbs' }))
    app.set('view engine', 'hbs')
    app.set('views', 'src/views')
    
}
module.exports = handlebarConfig 
