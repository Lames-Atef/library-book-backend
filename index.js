import express from "express";
import  sendEmail  from "./src/services/sendemail.js";
import initApp from "./src/app.router.js";
import dotenv from 'dotenv'
dotenv.config()
const app=express()
initApp(app,express)
const port = process.env.PORT || 4000
console.log({DB:process.env.LOCALDB})
app.listen(port,()=>{
    console.log(`app is running in port ${port}`)
})
sendEmail('lamessalem5@gmail.com','hello','<h1>hello lames</h1>')