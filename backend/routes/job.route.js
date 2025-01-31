import express from "express";
import isAuthenticated from "../middlewares/isAuthenicated.js";
import { getAllJobs, getJobById, getJobsByAdmin, postJob } from "../controllers/postjob.controllers.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/getadminjobs").get(isAuthenticated, getJobsByAdmin);
router.route("/get/:id").get(isAuthenticated, getJobById)

export default router;