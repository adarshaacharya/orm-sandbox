import { createValidator } from '../../common/middlewares/create-validator.middleware';
import { Router } from 'express';
import { studentsController } from './students.controller';
import { createStudentDto } from './students.dtos';

export const router: Router = Router();

router.post(
  '/',
  createValidator(createStudentDto),
  studentsController.createOne
);
