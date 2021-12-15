import { Request, Response, NextFunction } from "express";
import { CustomError, ValidationError } from "../utils/errors";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    console.log(
      `Error Happened, status: ${err.statusCode}, msg: ${err.message}`
    );
    return res
      .status(err.statusCode)
      .json({ success: false, error: err.message });
  }

  console.log(`Error Happened, msg: ${err.message}`);

  return res
    .status(500)
    .json({ success: false, error: err.message || "Unknown Server Error!" });
};

export default errorHandler;
