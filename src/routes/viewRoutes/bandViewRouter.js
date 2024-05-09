import { Router } from "express";

import bandViewController from "../../controllers/band/bandViewController.js";
import { hasSession } from "../../middlewares/authMiddleware.js";

const router = Router();


router.get("/",bandViewController.getAll);
router.get("/new",hasSession,bandViewController.createForm);
router.post("/",hasSession,bandViewController.create);
router.get("/:id",bandViewController.getById);
router.get("/:id/update",hasSession,bandViewController.updateForm);
router.post("/:id",hasSession,bandViewController.update);
router.post("/:id/add-artist",hasSession,bandViewController.addArtist);
router.post("/:id/remove-artist",hasSession,bandViewController.removeArtist);
//router.delete("/:id",bandViewController.remove);
router.post("/:id/remove",hasSession,bandViewController.remove);


export default router;

