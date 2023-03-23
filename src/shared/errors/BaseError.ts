import { getReasonPhrase, StatusCodes as HttpStatusCodes } from 'http-status-codes';

const defaultStatus = HttpStatusCodes.INTERNAL_SERVER_ERROR;
const defaultMessage = getReasonPhrase(HttpStatusCodes.INTERNAL_SERVER_ERROR);

class BaseError {
  readonly message: string;
  readonly status: number;
  code?: string;
  details?: any[];

  constructor(message = defaultMessage, status = defaultStatus) {
    this.message = message;
    this.status = status;
  }
}

export { BaseError };
