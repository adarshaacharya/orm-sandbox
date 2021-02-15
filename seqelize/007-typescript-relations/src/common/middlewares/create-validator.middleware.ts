import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { BadRequest } from '../exceptions';

export const createValidator = (schema: Joi.Schema, key: string = 'body') => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = schema.validate(req[key]);
  if (error) {
    throw new BadRequest(error.details[0].message);
  }
  next();
};
