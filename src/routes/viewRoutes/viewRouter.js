import { Router } from "express";

import artistViewRouter from "./artistViewRouter.js";
import userViewRouter from "./userViewRouter.js";

const router = Router();


router.use("/artist",artistViewRouter);
router.use("/",userViewRouter);
export default router;