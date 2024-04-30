import { Router } from "express";

import artistRouter from "./artistRouter.js";
import songRouter from "./songRouter.js";
import bandRouter from "./bandRouter.js";

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
        <input type="text" name="q" id="q">
        <button type="submit">enviar</button>
    </form> 
    `
    res.send(formString);   
})

router.use("/artist",artistRouter);
router.use("/song",songRouter);
router.use("/band",bandRouter);

/* router.post("/search",(req,res)=>{
    const {}
}) */

export default router;