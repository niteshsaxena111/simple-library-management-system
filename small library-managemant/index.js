const express = require('express')
const db = require('./model/connection')
const app = express()

app.get("/test",(req,res) => {
    res.send("<h1>hello</h1>")
})
const PORT = 3000
app.listen(PORT,()=>console.log('server is runing at ${PORT}'))