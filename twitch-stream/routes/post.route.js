import { Router } from 'express';
const router = Router();
import { CreatePost } from '../controllers/post.controller';

router.post('/', CreatePost);

export default router;
