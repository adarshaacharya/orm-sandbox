import { Router } from 'express';
const router = Router();
import { CreateUser } from '../controllers/user.controller';

router.post('/', CreateUser);

export default router;
