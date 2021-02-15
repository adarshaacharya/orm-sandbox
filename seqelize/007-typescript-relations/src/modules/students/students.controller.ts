import { Request, Response, NextFunction } from 'express';
import { studentsService } from './students.service';

import { Students } from './students.model';

class StudentsController {
  public async createOne(req: Request, res: Response, next: NextFunction) {
    try {
      const student = await studentsService.createOne(req.body);
      res.json(student);
    } catch (e) {
      next(e);
    }
  }
}

export const studentsController = new StudentsController();
