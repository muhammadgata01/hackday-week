module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('posts', {
    title: {
      type: DataTypes.STRING,
    },
    tag: {
      type: DataTypes.STRING,
    },
    snippet: {
      type: DataTypes.TEXT,
    },
    body: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.TEXT,
    },
  });

  return Posts;
};
