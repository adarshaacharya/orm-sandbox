import { userController } from '../controllers/user.controller';
import { checkJwt } from '../middlewares/auth.middleware';

import { Router } from 'express';

export const router: Router = Router();

/**
 * @private
 */
router.get('/', [checkJwt], userController.getAll);

/**
 * @public
 */
router.post('/', userController.createOne);

/**
 * @private
 */
router.put('/:id', [checkJwt], userController.update);

/**
 * @private
 */
router.put('/:id', [checkJwt], userController.delete);
