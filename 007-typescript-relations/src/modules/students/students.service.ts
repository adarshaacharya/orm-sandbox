import { Students } from './students.model';

import * as bcrypt from 'bcrypt';
import { sequelize } from '../../config/database';
import { hashFunc } from '../../common/hash/password.hash';
import { BadRequest } from '../../common/exceptions';

interface IStudentsData {
  email: string;
  password: string;
  name: string;
  groupId: number;
}

class StudentsService {
  public async createOne(studentsData: IStudentsData): Promise<Students> {
    const { name, email, password } = studentsData;

    if (await this.findOneByEmail(email)) {
      throw new BadRequest('User with provided email already exists');
    }
    const students = new Students(studentsData);
    students.password = hashFunc(students.password);

    return students.save();
  }

  public async findOneByEmail(email: string): Promise<Students> {
    const student = await Students.findOne({
      where: { email },
    });

    return student;
  }
}

export const studentsService = new StudentsService();
