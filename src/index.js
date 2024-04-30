import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello " + process.env.APP_USERNAME)
})

app.listen(process.env.APP_PORT,()=>{
    console.log("Servidor en marcha en el puerto "+process.env.APP_PORT);
})