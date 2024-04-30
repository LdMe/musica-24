import { Router } from "express";

import { getAll,getById,create,update,remove } from "../controllers/genreController.js";

//import artistController from "../controllers/artistController.js";

const router = Router();


router.get("/",async (req,res)=>{
    const result = await getAll();
    res.send(result);
});

router.get("/:id",async(req,res)=>{
    const id =req.params.id;
    const result = await getById(id);
    console.log("conseguir genero por id",result);
    res.send(result);
})


export default router;

