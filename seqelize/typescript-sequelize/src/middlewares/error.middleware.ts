import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
//   const statusCode = err.statusCode;
  res.status(500).json({ message: err.message });
};
