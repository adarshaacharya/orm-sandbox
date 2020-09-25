export const postModel = (sequelize, Sequelize) => {
  const Post = sequelize.define('post', {
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
