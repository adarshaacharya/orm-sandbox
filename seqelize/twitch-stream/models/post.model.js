export const postModel = (sequelize, Sequelize) => {
  const Post = sequelize.define('post', {
    title: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
    description: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
  });

  return Post;
};
