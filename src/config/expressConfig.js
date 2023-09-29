const path = require('path')
const express = require('express')
const expressConfig = (app) => {
    const staticFiles = express.static(path.resolve(__dirname, '../public'))
    //     or 
    //     ||
    //     \/
    // const staticFiles = express.static( 'src/views/public')
    app.use(staticFiles)
}
module.exports = expressConfig