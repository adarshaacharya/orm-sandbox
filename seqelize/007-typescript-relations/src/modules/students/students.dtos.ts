import * as Joi from 'joi';

export const createStudentDto = Joi.object().keys({
  name: Joi.string().min(1).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  groupId : Joi.number()
});
