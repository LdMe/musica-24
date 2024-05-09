import {Router} from "express";
import userApiController from "../../controllers/user/userApiController.js";
import { isTokenCorrect } from "../../middlewares/authMiddleware.js";

const router = Router();

router.post("/register",userApiController.register);
router.post("/login",userApiController.login);
router.get("/users",isTokenCorrect,userApiController.getAll);
export default router;