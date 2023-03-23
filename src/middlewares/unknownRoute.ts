import { NextFunction, Request, Response } from 'express';

const unknownRoute = (request: Request, response: Response, next: NextFunction) => {
  next(new Error('Route not found'));
};

export default unknownRoute;
