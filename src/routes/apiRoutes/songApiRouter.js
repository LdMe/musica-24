import { Router } from "express";

import songApiController from "../../controllers/song/songApiController.js";

const router = Router();


router.get("/",songApiController.getAll);
//router.post("/",songApiController.create);
router.get("/create",songApiController.create);
router.get("/:id",songApiController.getById);
//router.put("/:id",songApiController.update);
router.get("/:id/update",songApiController.update);
//router.delete("/:id",songApiController.remove);
router.get("/:id/remove",songApiController.remove);



export default router;

