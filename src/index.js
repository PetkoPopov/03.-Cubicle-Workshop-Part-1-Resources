const express = require('express')
const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')
const { port } = require("./constans/constans")
const dbConnect = require("./connectDB")
const router = require('./router')
dbConnect()
    .then(() => { console.log("you connected") })
    .catch((err) => { console.log(err) })
const app = express()


handlebarsConfig(app)
expressConfig(app)

 
app.use(router)



app.listen(port, () => console.log('server id runing on port ' + port))
