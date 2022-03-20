const postController = require('../controllers/postsController');

const { addPost, getAllPosts, getOnePost, updatePost, deletePost } =
  postController;

const router = require('express').Router();

// Posts
router.get('/posts', getAllPosts);
router.get('/posts/:id', getOnePost);
router.post('/posts', addPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

module.exports = router;
