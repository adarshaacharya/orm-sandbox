import { Router } from 'express';
const router = Router();
import { createPost, deletePostById } from '../controllers/post.controller';

router.post('/', createPost);

router.delete('/:id', deletePostById);
export default router;
