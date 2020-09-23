const { sequelize, Sequelize } = require('../database/db');

const User = sequelize.define('user', {
  uuid: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  firstName: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  bio: {
    allowNull: false,
    type: Sequelize.TEXT,
  },
});

const Post = sequelize.define('Posts', {
  title: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  description: {
    allowNull: false,
    type: Sequelize.STRING,
  },
});

module.exports = { User, Post };
