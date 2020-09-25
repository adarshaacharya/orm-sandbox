import { Router } from 'express';
const router = Router();
import users from '../controllers/user.controller';

router.post('/', (req, res) => users.create);

export default router;
