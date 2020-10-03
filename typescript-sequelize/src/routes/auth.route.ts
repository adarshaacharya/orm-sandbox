import { authController } from '../controllers/auth.controller';

import { Router } from 'express';

export const router: Router = Router();

/**
 * @public
 */
router.get('/login', authController.login);
