import { Router } from "express";

import artistViewController from "../../controllers/artist/artistViewController.js";

const router = Router();


router.get("/",artistViewController.getAll);
router.get("/new",artistViewController.createForm);
router.post("/",artistViewController.create);
router.get("/:id",artistViewController.getById);
router.get("/:id/update",artistViewController.updateForm);
router.post("/:id",artistViewController.update);
//router.delete("/:id",artistViewController.remove);
router.post("/:id/remove",artistViewController.remove);



export default router;

