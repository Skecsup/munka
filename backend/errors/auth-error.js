import CustomError from "./custom-error.js";

class UnAuthenticatedError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

export default UnAuthenticatedError;
