import { Router } from "express";
import {
  createPcController,
  getAllPcsController,
} from "../controllers/pcController";

const router = Router();

router.route("/").get(getAllPcsController).post(createPcController);

export default router;
