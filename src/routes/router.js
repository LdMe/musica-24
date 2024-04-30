import { Router } from "express";

import artistRouter from "./artistRouter.js";
import bandRouter from "./bandRouter.js";
import albumRouter from "./albumRouter.js";
import genreRouter from "./genreRouter.js";

const router = Router();

router.get("/",(req,res)=>{
    res.send("Hello " + process.env.APP_USERNAME)
})

router.get("/search",(req,res)=>{
    //const query = req.query.q;
    const {q,name} = req.query;
    res.send(`Mostrando resultados de la búsqueda '${q}' con el nombre ${name}`);
})

router.get("/form",(req,res)=>{
    const formString = `
    <form action="/search" method="get">
        <label for="q">pregunta</label>
        <input type="text" name="q" id="q" required>
        <label for="name">pregunta name</label>
        <input type="text" name="name" id="name" required>
        <button type="submit">enviar</button>
    </form> 
    `
    res.send(formString);   
})

router.use("/artist",artistRouter);

router.use("/band",bandRouter);

router.use("/album",albumRouter);

router.use("/genre",genreRouter);

export default router;