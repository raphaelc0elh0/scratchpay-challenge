import { StatusCodes } from 'http-status-codes';

import { BaseError } from './BaseError';

class ValidationError extends BaseError {
  constructor(message: string, details?: any[]) {
    super(message, StatusCodes.BAD_REQUEST);
    this.code = 'VALIDATION_ERROR';
    this.details = details;
  }
}

export { ValidationError };
