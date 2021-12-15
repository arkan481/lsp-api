import { Router } from "express";
import { getAveragesController } from "../controllers/avgController";

const router = Router();

router.route("/").get(getAveragesController);

export default router;
