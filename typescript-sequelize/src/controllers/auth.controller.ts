import * as express from 'express';

import { FindOptions } from 'sequelize';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from 'models/user.model';
import { AuthInterface } from 'types';

export class AuthController {
  /**
   * @method POST
   * @params JSON [[AuthInterface]]
   * @route /login
   * @acces public
   * @async
   */
  public async login(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const { password, email }: AuthInterface = req.body;

      const options: FindOptions = {
        where: { email },
      };

      const user: User = await User.findOne<User>(options);

      if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
        res.status(401).json({ data: 'User not found' });
        return;
      }
      /**
       * Sing JWT, valid for 1 hour
       */
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.json({
        id: user.id,
        name: user.name,
        token,
      });

      next();
      return;
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export const authController = new AuthController();
