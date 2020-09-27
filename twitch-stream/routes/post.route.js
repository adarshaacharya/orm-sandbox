import { Router } from 'express';
const router = Router();
import {
  createPost,
  deletePostById,
  findPostById,
} from '../controllers/post.controller';

router.post('/', createPost);

router.delete('/:id', deletePostById);

router.get('/:id', findPostById);

export default router;
