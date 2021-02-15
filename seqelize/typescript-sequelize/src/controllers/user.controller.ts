import bcrypt from 'bcryptjs';
import { NextFunction, Request, Response } from 'express';
import { UpdateOptions, DestroyOptions } from 'sequelize';
import { User } from '../models/user.model';
import { UserInterface } from '../types';

export class UserController {
  /**
   * @method GET
   * @route /users
   * @acces private
   * @async
   */
  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users: Array<User> = await User.findAll<User>({
        attributes: {
          exclude: ['passwordHash'],
        },
      });
      res.status(200).json(users);
    } catch (error) {
      // res.status(500).json(error);
      next();
    }
  }

  /**
   * @method POST
   * @params [[UserSaveInterface]]: JSON
   * @route /users
   * @acces public
   * @async
   */
  public async createOne(req: Request, res: Response, next: NextFunction) {
    try {
      const params: UserInterface = req.body;
      params.passwordHash = bcrypt.hashSync(params.password, 8);

      const user: User = await User.create<User>(params);
      return user
        ? res.status(200).json({ data: 'User create with success' })
        : res.status(404).json({ errors: ["User doesn't create"] });
    } catch (error) {
      // return res.status(500).json(error);
      next();
    }
  }

  /**
   * @method GET
   * @argsPath id: Number
   * @route /users/:id
   * @acces private
   */
  public async show(req: Request, res: Response, next: NextFunction) {
    try {
      const userId: number = parseInt(req.params.id, 10);

      const user: User | null = await User.findByPk<User>(userId, {
        attributes: { exclude: ['passwordHash'] },
      });

      return user
        ? res.json(user)
        : res.status(404).json({ errors: ['User not found'] });
    } catch (error) {
      next(error);
    }
  }

  /**
   * @method PUT
   * @params [[UserSaveInterface]]: JSON
   * @route /users
   * @acces private
   */
  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const userId: number = parseInt(req.params.id, 10);
      const params: UserInterface = req.body;

      if (params.password) {
        params.passwordHash = bcrypt.hashSync(params.password, 10);
      }

      const options: UpdateOptions = {
        where: { id: userId },
        returning: true,
        limit: 1,
      };
      const [, user] = await User.update(params, options);
      if (user) {
        res.status(202).json({ data: 'User update with success' });
      }

      return res.status(404).json({ errors: ['User not found'] });
    } catch (error) {
      // return res.status(500).json(error);
      next();
    }
  }

  /**
   * @method DELETE
   * @argsPath id: Number
   * @route /users/:id
   * @acces private
   */
  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const userId: number = parseInt(req.params.id, 10);

      const options: DestroyOptions = {
        where: { id: userId },
        limit: 1,
      };
      const user = await User.destroy(options);
      if (user) {
        return res.status(202).json({ data: 'User delete with success' });
      }
      return res.status(404).json({ errors: ['User not found'] });
    } catch (error) {
      // return res.status(500).json(error);
      next();
    }
  }
}

export const userController = new UserController();
