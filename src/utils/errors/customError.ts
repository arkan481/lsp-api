class CustomError extends Error {
  statusCode = 500;

  constructor(msg: string, statusCode: number) {
    super(msg);
    this.statusCode = statusCode;
  }
}

export default CustomError;
