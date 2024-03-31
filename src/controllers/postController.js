const { getAllPosts, getPostById, addNewPost } = require("../models/index");

// Get all posts
const getAllPostsController = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a post by id
const getPostByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await getPostById(id);
    if (!post) {
      res.status(404).json({ error: "Post not found" });
      return;
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new post
const addNewPostController = async (req, res) => {
  try {
    const { account_id, description } = req.body;
    const photoData = req.file ? req.file.buffer : null;
    const newPost = await addNewPost(account_id, description, photoData);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllPostsController,
  getPostByIdController,
  addNewPostController,
};