export const tagModel = (sequelize, Sequelize) => {
  const Tag = sequelize.define('tag', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return Tag;
};
