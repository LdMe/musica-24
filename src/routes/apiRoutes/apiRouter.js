import { Router } from "express";

import artistApiRouter from "./artistApiRouter.js";

const router = Router();


router.use("/artist",artistApiRouter);


export default router;