import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenicated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticated,updateProfile);
router.route("/logout").post(logout);

export default router;

