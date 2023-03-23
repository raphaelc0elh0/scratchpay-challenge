/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { BaseError } from 'shared/errors/BaseError';

export const errorHandler = (error: Error, request: Request, response: Response) => {
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

  console.log(error);
  return response.status(status).json(json);
};

type ErrorResponse = {
  message: string;
  status: number;
  code?: string;
  details?: string[];
}