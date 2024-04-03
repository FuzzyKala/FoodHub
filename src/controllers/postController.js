const { Post } = require("../models/index");

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.getAllPosts();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a post by id
const getPostById = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.getPostById(id);
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
const addNewPost = async (req, res) => {
  const { user_id, description } = req.body;
  try {
    const photoData = req.file ? req.file.buffer : null;
    const newPost = await Post.addNewPost(user_id, description, photoData);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Get the latest post
const getLatestPost = async (req, res) => {
  try {
    const post = await Post.getLatestPost();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a post by id
const updatePostById = async (req, res) => {
  const id = req.params.id;
  try {
    const newData = req.body;
    await Post.updatePost(id, newData);
    res.status(200).json({ message: "Post updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a post by id
const deletePostById = async (req, res) => {
  try {
    const id = req.params.id;
    await Post.deletePost(id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  getLatestPost,
  addNewPost,
  updatePostById,
  deletePostById,
};
