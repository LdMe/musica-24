import { Router } from "express";

import artistViewRouter from "./artistViewRouter.js";
import bandViewRouter from "./bandViewRouter.js";
import songViewRouter from "./songViewRouter.js";

const router = Router();


router.use("/artist",artistViewRouter);
router.use("/band",bandViewRouter);
router.use("/song",songViewRouter);

export default router;