const express = require('express')
const cors=require('cors')
const bodyParser = require('body-parser');
require('./connections/connection')
const router=require('./routers/router')

const server=express()
server.use(express.json())
server.use(bodyParser.json());
server.use(cors())
// server.use(express.urlencoded({extended:true}))
server.use(router)
const port=4000
server.listen(port,()=>{
    console.log(`________Backend Server Started At Port ${port}______`);
})