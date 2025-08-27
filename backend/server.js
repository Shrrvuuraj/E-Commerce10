import express from 'express';
import cors from 'cors';

import connectMongodb from "./config/db.js"
import dotenv from "dotenv" ;


//env lafd a
dotenv.config({override:true}) ;

//connect
connectMongodb(); 

const app=express();

const PORT= process.env.PORT|| 8000;






app.get("/",(req,res)=>{
    res.send("all good")
})
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
})
