/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';

export const errorHandler = (error: Error, request: Request, response: Response) => {
  let status = 500;

  const json = {
    message: error.message ?? 'Internal Error',
    status
  };

  console.log(error);
  return response.status(status).json(json);
};
