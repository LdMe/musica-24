import { Router } from "express";

import bandApiController from "../../controllers/band/bandApiController.js";

const router = Router();

router.get("/",bandApiController.getAll);
//router.post("/",bandApiController.create);
router.get("/create",bandApiController.create);
router.get("/:id",bandApiController.getById);
//router.put("/:id",bandApiController.update);
router.get("/:id/update",bandApiController.update);
//router.delete("/:id",bandApiController.remove);
router.get("/:id/remove",bandApiController.remove);


export default router;