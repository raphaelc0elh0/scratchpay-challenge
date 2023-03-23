import { StatusCodes } from 'http-status-codes';

import { BaseError } from './BaseError';

class InternalError extends BaseError {
  constructor(message: string) {
    super(message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

export { InternalError };
