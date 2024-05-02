import { Router } from "express";

import artistViewRouter from "./artistViewRouter.js";

const router = Router();


router.use("/artist",artistViewRouter);

export default router;