const { query } = require("./database");
const moment = require("moment-timezone");

// Function to get all posts
const getAllPosts = async () => {
  try {
    const posts = await query("SELECT * FROM post");
    return posts.rows || [];
  } catch (err) {
    throw new Error(err.message);
  }
};

// Function to get a post by id
const getPostById = async (id) => {
  try {
    const post = await query("SELECT * FROM post WHERE post_id = $1", [id]);
    console.log(post);
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

module.exports = { getAllPosts, getPostById, addNewPost };
