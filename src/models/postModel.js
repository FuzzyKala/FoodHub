const { query } = require("./database");
const moment = require("moment-timezone");

// Function to get all posts
const getAllPosts = async () => {
  try {
    const queryText = "SELECT * FROM post";
    const posts = await query(queryText);
    return posts.rows || [];
  } catch (err) {
    throw new Error(err.message);
  }
};

// Function to get a post by id
const getPostById = async (id) => {
  try {
    const queryText = "SELECT * FROM post WHERE post_id = $1";
    const post = await query(queryText, [id]);
    return post.rows[0] || null;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Function to add a new post
const addNewPost = async (account_id, description, photoData) => {
  try {
    const timestamp = moment.tz("Europe/Helsinki").format();
    const queryText =
      "INSERT INTO post (account_id, description, photo_data, date) VALUES ($1, $2, $3, $4) RETURNING *";
    const result = await query(queryText, [
      account_id,
      description,
      photoData,
      timestamp,
    ]);
    return result.rows[0];
  } catch (err) {
    throw new Error(err.message);
  }
};

// Function to update an existing post
const updatePost = async (id, newData) => {
  try {
    const queryText = "UPDATE post SET description = $1 WHERE post_id = $2";
    await query(queryText, [newData.description, id]);
  } catch (err) {
    throw new Error(err.message);
  }
};

// Function to delete a post
const deletePost = async (id) => {
  try {
    const queryText = "DELETE FROM post WHERE post_id = $1";
    await query(queryText, [id]);
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  addNewPost,
  updatePost,
  deletePost,
};
