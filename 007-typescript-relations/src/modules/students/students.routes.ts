import { Router } from 'express';
import { studentsController } from './students.controller';

export const router: Router = Router();

router.post('/', studentsController.createOne);
