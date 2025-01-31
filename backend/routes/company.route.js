import express from "express";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import isAuthenticated from "../middlewares/isAuthenicated.js";

const router = express.Router();

router.route("/registercompany").post(isAuthenticated,registerCompany);
router.route("/getcompany").get(isAuthenticated,getCompany);
router.route("/getcompany/:id").get(isAuthenticated,getCompanyById);
router.route("/updatecompany/:id").put(isAuthenticated,updateCompany);

export default router;