import { Router } from "express";

import songViewController from "../../controllers/song/songViewController.js";

const router = Router();


router.get("/",songViewController.getAll);
router.get("/new",songViewController.createForm);
router.post("/",songViewController.create);
router.get("/:id",songViewController.getById);
router.get("/:id/update",songViewController.updateForm);
router.post("/:id",songViewController.update);
//router.delete("/:id",songViewController.remove);
router.post("/:id/remove",songViewController.remove);



export default router;

