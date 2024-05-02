import { Router } from "express";

import artistApiController from "../../controllers/artist/artistApiController.js";

const router = Router();


router.get("/",artistApiController.getAll);
//router.post("/",artistApiController.create);
router.get("/create",artistApiController.create);
router.get("/:id",artistApiController.getById);
//router.put("/:id",artistApiController.update);
router.get("/:id/update",artistApiController.update);
//router.delete("/:id",artistApiController.remove);
router.get("/:id/remove",artistApiController.remove);



export default router;

