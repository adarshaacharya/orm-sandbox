import { userController } from '../controllers/user.controller';

import { Router } from 'express';

export const router: Router = Router();

/**
 * @private
 */
router.get('/', userController.getAll);

/**
 * @private
 */
router.post('/', userController.createOne);

/**
 * @private
 */
router.put('/:id', userController.update);

/**
 * @private
 */
router.put('/:id', userController.delete);
