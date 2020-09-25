import Sequelize from 'sequelize';
import config from '../config/db.config';
import { userModel } from './user.model';
import { postModel } from './post.model';

const sequelize = new Sequelize(
  `${config.DB}`,
  `${config.USER}`,
  `${config.PASSWORD}`,
  {
    host: config.HOST,
    dialect: config.dialect,

    operatorsAliases: 0,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = userModel(sequelize, Sequelize);
db.posts = postModel(sequelize, Sequelize);

module.exports = db;
