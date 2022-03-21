const db = require('../models');

// Tabel dari model yang telah dibuat
const Post = db.post;

// Handle untuk post data
const addPost = async (req, res) => {
  try {
    let postInfo = {
      title: req.body.title,
      tag: req.body.tag,
      snippet: req.body.snippet,
      body: req.body.body,
      image: req.body.image,
    };

    // Membuat post baru dan di simpan di DB
    const post = await Post.create(postInfo);
    res.status(200).send(post);
    console.log(post);
  } catch (error) {
    res.status(500);
  }
};

// Handle untuk mangambil semua post data
const getAllPosts = async (req, res) => {
  try {
    // Mengambil semua post data dari DB
    const posts = await Post.findAll({});
    res.status(200).send(posts);
  } catch (error) {
    res.status(404);
  }
};

// Handle untuk mengambil satu post data
const getOnePost = async (req, res) => {
  const id = req.params.id;

  try {
    // Mengambil satu post data berdasarkan id
    const post = await Post.findOne({ where: { id: id } });
    res.status(200).send(post);
  } catch (error) {
    res.status(404);
  }
};

// Handle untuk mengedit satu post data
const updatePost = async (req, res) => {
  const id = req.params.id;

  try {
    // Mengedit satu post data berdasarkan id
    const post = await Post.update(req.body, { where: { id: id } });
    res.status(200).send(post);
  } catch (error) {
    res.status(500);
  }
};

// Handle untuk menghapus satu post data
const deletePost = async (req, res) => {
  const id = req.params.id;

  try {
    // Menghapus satu post data berdasarkan id
    await Post.destroy({ where: { id: id } });
    res.status(200).send('Post is delete !');
  } catch (error) {
    res.status(404);
  }
};

module.exports = {
  addPost,
  getAllPosts,
  getOnePost,
  updatePost,
  deletePost,
};
