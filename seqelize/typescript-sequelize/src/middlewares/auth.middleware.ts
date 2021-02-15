import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { User } from '../models/user.model';

export const checkJwt = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.auth; // add this to header

    const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);
    res.locals.jwtPayload = jwtPayload;
    const { id, email } = jwtPayload;
    const user = await User.findByPk(id);

    if (!user) {
      throw Error('User not found');
    }
    const newToken = jwt.sign({ id, email }, process.env.JWT_SECRET, {});

    res.setHeader('token', newToken);

    next();
  } catch (error) {
    res.status(401).json('Not authorized');
  }
};
