import { Router } from "express";

import apiRouter from "./apiRoutes/apiRouter.js";
import viewRouter from "./viewRoutes/viewRouter.js";

import bandController from "../controllers/band/bandController.js";
import artistController from "../controllers/artist/artistController.js";
import songController from "../controllers/song/songController.js";
const router = Router(); 


router.get("/",async (req,res)=>{
    const bands = await bandController.getAll();
    const artists = await artistController.getAll();
    const songs = await songController.getAll();
    res.json({bands,artists,songs});
})
router.use("/api",apiRouter);
router.use("/",viewRouter); 


export default router;