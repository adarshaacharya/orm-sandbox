// const Post = require('./post.model');

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('users', {
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    address: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  });

  // User.hasMany(Post, { as: 'posts', foreignKey: 'id' }); // 1:1 relationship between

  return User;
};
