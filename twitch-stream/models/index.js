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

// one user has many Posts, while each post belongs to single user -> one to many
db.users.hasMany(db.posts, {
  as: 'posts',
  onDelete: 'CASCADE',
});
db.posts.belongsTo(db.users, {
  foreignKey: 'userId', // if not passed automatically userId is created
  as: 'user', // while fetching user from post it belongs
});
// note : defining alias helps in eager loading + includes[] works with only aliases

module.exports = db;
