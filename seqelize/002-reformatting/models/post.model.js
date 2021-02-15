// const { sequelize, Sequelize } = require('../database/db');

module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define('posts', {
    title: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  });

  return Post;
};
