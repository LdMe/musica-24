import { Router} from "express";

import bandViewController from "../../controllers/band/bandViewController.js";

const router = Router();


router.get("/",bandViewController.getAll);
router.get("/new",bandViewController.createForm);
router.post("/",bandViewController.create);
router.get("/:id",bandViewController.getById);
router.get("/:id/update",bandViewController.updateForm);
router.post("/:id",bandViewController.update);
//router.delete("/:id",bandViewController.remove);
router.post("/:id/remove",bandViewController.remove);



export default router;