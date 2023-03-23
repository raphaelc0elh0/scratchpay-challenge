/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { BaseError } from 'shared/errors/BaseError';

export const errorHandler = (error: Error, request: Request, response: Response, next: NextFunction) => {
  let status = 500;

  const json: ErrorResponse = {
    message: error.message ?? 'Internal Error',
    status
  };

  if (error instanceof BaseError) {
    status = error.status;
    if (error.code) json.code = error.code;
    if (error.details) json.details = error.details;
  }

  console.log('ERROR', error);
  return response.status(status).json(json);
};

type ErrorResponse = {
  message: string;
  status: number;
  code?: string;
  details?: string[];
}