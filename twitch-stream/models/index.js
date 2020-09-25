import Sequelize from 'sequelize';
import dbConfig from '../config/db.config';
import UserModel from './user.model';

const sequelize = new Sequelize(
  `${dbConfig.DB}`,
  `${dbConfig.USER}`,
  `${dbConfig.PASSWORD}`,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    operatorsAliases: 0,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = UserModel(sequelize, Sequelize);

export default db;

