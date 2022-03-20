const db = require('../models');

const Posts = db.posts;

// Post
const addPost = async (req, res) => {
  let postInfo = {
    title: req.body.title,
    tag: req.body.tag,
    snippet: req.body.snippet,
    body: req.body.body,
    image: req.body.image,
  };
  const post = await Posts.create(postInfo);
  res.status(200).send(post);
  console.log(post);
};

// Get all post
const getAllPosts = async (req, res) => {
  const posts = await Posts.findAll({});
  res.status(200).send(posts);
};

// Get one post
const getOnePost = async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findOne({ where: { id: id } });
  res.status(200).send(post);
};

// Update

const updatePost = async (req, res) => {
  const id = req.params.id;
  const post = await Posts.update(req.body, { where: { id: id } });

  res.status(200).send(post);
};

// Delete
const deletePost = async (req, res) => {
  const id = req.params.id;
  await Posts.destroy({ where: { id: id } });

  res.status(200).send('Post is delete !');
};

module.exports = {
  addPost,
  getAllPosts,
  getOnePost,
  updatePost,
  deletePost,
};
