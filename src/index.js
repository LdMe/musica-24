import express from "express";
import dotenv from "dotenv";

import router from "./routes/router.js";

dotenv.config();

const app = express();

app.use("/",router);

app.listen(process.env.APP_PORT,()=>{
    console.log("Servidor en marcha en el puerto "+process.env.APP_PORT);
})