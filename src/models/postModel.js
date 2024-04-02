const { query } = require("./database");
const moment = require("moment-timezone");

class Post {
  // Function to get all posts
  static async getAllPosts() {
    try {
      const queryText = "SELECT * FROM post";
      const posts = await query(queryText);
      return posts.rows || [];
    } catch (err) {
      throw new Error(err.message);
    }
  }
  // Function to get a post by id
  static async getPostById(id) {
    try {
      const queryText = "SELECT * FROM post WHERE post_id = $1";
      const post = await query(queryText, [id]);
      return post.rows[0] || null;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  // Function to get the latest post
  static async getLatestPost() {
    try {
      const queryText = "SELECT * FROM post ORDER BY date DESC LIMIT 1";
      const post = await query(queryText);
      return post.rows[0] || null;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  // Function to add a new post
  static async addNewPost(account_id, description, photoData) {
    try {
      const timestamp = moment.tz("Europe/Helsinki").format();
      const queryText =
        "INSERT INTO post (user_id, description, photo_data, date) VALUES ($1, $2, $3, $4) RETURNING *";
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
  }
  // Function to update an existing post
  static async updatePost(id, newData) {
    try {
      const queryText = "UPDATE post SET description = $1 WHERE post_id = $2";
      await query(queryText, [newData.description, id]);
    } catch (err) {
      throw new Error(err.message);
    }
  }
  // Function to delete a post
  static async deletePost(id) {
    try {
      const queryText = "DELETE FROM post WHERE post_id = $1";
      await query(queryText, [id]);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = Post;
