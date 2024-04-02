const {
  getAllPosts,
  getPostById,
  getLatestPost,
  addNewPost,
  updatePost,
  deletePost,
} = require("../models/index");

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
  try {
    const id = req.params.id;
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
// Get the latest post
const getLatestPostController = async (req, res) => {
  try {
    const post = await getLatestPost();
    console.log(post);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a post by id
const updatePostById = async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    await updatePost(id, newData);
    res.status(200).json({ message: "Post updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a post by id
const deletePostById = async (req, res) => {
  try {
    const id = req.params.id;
    await deletePost(id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllPostsController,
  getPostByIdController,
  getLatestPostController,
  addNewPostController,
  updatePostById,
  deletePostById,
};
