import { Router } from 'express';
const router = Router();
import {
  createUser,
  deleteUserById,
  findUserById,
  getUsers,
} from '../controllers/user.controller';

router.post('/', createUser);

router.get('/', getUsers);

router.get('/:id', findUserById);

router.delete('/:id', deleteUserById);

export default router;
