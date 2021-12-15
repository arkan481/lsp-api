import e, { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../middlewares";
import { getAverages } from "../services/avgService";

const getAveragesController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const averages = await getAverages();

    res.status(200).json({ success: true, data: averages });
  }
);

export { getAveragesController };
