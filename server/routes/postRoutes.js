// Import post controller dari postController
const postController = require('../controllers/postController');

// Desctructuring object dari data postController
const { addPost, getAllPosts, getOnePost, updatePost, deletePost } =
  postController;

// membuat object router dari express
const router = require('express').Router();

// GET semua post data
router.get('/posts', getAllPosts);

// GET satu post data berdasarkan id
router.get('/posts/:id', getOnePost);

// POST membuat post data baru
router.post('/posts', addPost);

// PUT mengedit post data berdasarkan id
router.put('/posts/:id', updatePost);

// DELETE menghapus post data berdasarkan id
router.delete('/posts/:id', deletePost);

module.exports = router;
