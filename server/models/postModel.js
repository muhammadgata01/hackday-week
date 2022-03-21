module.exports = (sequelize, DataTypes) => {
  // Mendefinisikan modal post, representasi dari tabel
  const Post = sequelize.define('post', {
    title: {
      // Mendefiniskan tipe data dari row
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

  return Post;
};
