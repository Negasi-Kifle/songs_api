"use strict";

// Custom Error Class that inherits from Main Error Class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.status = `${this.statusCode}`.startsWith("4") ? "FAIL" : "ERROR";
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Export
module.exports = AppError;
