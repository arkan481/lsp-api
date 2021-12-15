import CustomError from "./customError";

class ValidationError extends CustomError {
  name = "Validation Error";

  constructor(msg: string) {
    super(msg, 400);
  }
}

export default ValidationError;
