import { Router } from 'express';
import {
  createTag,
  getAllTags,
  addPostToTag,
  findById,
} from '../controllers/tag.controller';
const router = Router();

router.post('/', createTag);

router.get('/', getAllTags);

router.post('/post', addPostToTag);

router.get('/:id', findById);

export default router;
