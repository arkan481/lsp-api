import { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
import { asyncHandler, validate } from "../middlewares";
// import { ValidationError } from "../utils/errors";
import { createProductValidationSchema } from "../validations";
import {
  createProductionCost,
  getAllProductionCost,
} from "../services/pcService";

const createPcController = [
  validate(createProductValidationSchema),
  // * Create PC
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const pc = req.body as Prisma.ProductionCostCreateInput;
    const newPc = await createProductionCost(pc);

    res.status(201).json({ success: true, data: newPc });
  }),
];

const getAllPcsController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const pcs = await getAllProductionCost();
    res.status(200).json({ success: true, data: pcs });
  }
);

export { createPcController, getAllPcsController };
