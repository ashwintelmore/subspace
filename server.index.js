//modules
const express = require("express")
const blog = require('./routes/Blog')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const app = express()
//routes
app.use('/api', blog)


//port
app.listen(PORT, function () {
    console.log("Run on port", PORT)
})