import {Router} from "express";
import userViewController from "../../controllers/user/userViewController.js";

const router = Router();

router.get("/register",userViewController.registerForm);
router.post("/register",userViewController.register);
router.get("/login",userViewController.loginForm);
router.post("/login",userViewController.login);
router.get("/users",userViewController.getAll);
router.post("/logout",userViewController.logout);
export default router;