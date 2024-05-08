import { Router } from "express";

import artistApiRouter from "./artistApiRouter.js";
import bandApiRouter from "./bandApiRouter.js";
import songApiRouter from "./songApiRouter.js";

const router = Router();


router.use("/artist",artistApiRouter);
router.use("/band",bandApiRouter);
router.use("/song",songApiRouter);


export default router;