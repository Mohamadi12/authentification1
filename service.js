const express=require('express')
require('dotenv').config()
const cors=require('cors')
const routeController = require('./routes/routeController')
const connect = require('./config/conectDB')
const app=express()
const port=5000




app.use(express.json())
app.use(cors())
app.use('/singup',routeController)
connect()





app.listen(port,(err)=>{
    err?console.log(err):console.log(`Yes,Successfull ${port}`)
})