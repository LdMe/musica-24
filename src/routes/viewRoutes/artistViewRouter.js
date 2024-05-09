import { Router } from "express";

import artistViewController from "../../controllers/artist/artistViewController.js";
import { hasSession } from "../../middlewares/authMiddleware.js";

const router = Router();


router.get("/",artistViewController.getAll);
router.get("/new",hasSession,artistViewController.createForm);
router.post("/",hasSession,artistViewController.create);
router.get("/:id",artistViewController.getById);
router.get("/:id/update",hasSession,artistViewController.updateForm);
router.post("/:id",hasSession,artistViewController.update);
//router.delete("/:id",artistViewController.remove);
router.post("/:id/remove",hasSession,artistViewController.remove);



export default router;

