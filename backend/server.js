import express from 'express';
import cors from 'cors';


const app=express();
const PORT=8000|| process.env.PORT;
app.get("/",(req,res)=>{
    res.send("all good")
})
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
})
