import { Router } from "express";

import artistViewRouter from "./artistViewRouter.js";
import userViewRouter from "./userViewRouter.js";
import bandViewRouter from "./bandViewRouter.js";

const router = Router();


router.use("/artist",artistViewRouter);
router.use("/",userViewRouter);
router.use("/band",bandViewRouter);
export default router;