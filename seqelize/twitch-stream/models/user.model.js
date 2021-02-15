export const userModel = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    // User model
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
    phoneNumber: {
      allowNull: false,
      type: Sequelize.REAL,
    },
  });

  return User;
};

// export default user;
