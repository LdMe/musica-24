import { Router } from "express";

import artistApiRouter from "./artistApiRouter.js";
import userApiRouter from "./userApiRouter.js";

const router = Router();


router.use("/artist",artistApiRouter);
router.use("/",userApiRouter);


export default router;