import { Groups } from './groups.model';
import { Students } from '../students/students.model';
import { BadRequest } from 'common/exceptions';

export interface ICreateGroup {
  groupName?: string;
}

class GroupService {
  public async createOne({ groupName, teacherId }, user: CustomUser) {
    
    const group = await Groups.findOne({ where: { groupName } });
    if (group) {
      throw new BadRequest(`Group with name "${groupName} already exists`);
    }

      return Groups.create({ groupName });
    }
}
