const express = require("express");
const { query } = require("../query/db");
const postRouter = express.Router();
const moment = require("moment-timezone");
const multer = require("multer");
const upload = multer();

// get all posts
postRouter.get("/", async (req, res) => {
  // console.log(query);
  try {
    const posts = await query("select * from post");
    // this is for empty database checking.
    const rows = posts.rows ? posts.rows : [];
    res.status(200).json(rows);
  } catch (err) {
    res.statusMessage = err;
    res.status(500).json({ error: err });
  }
});

// get a specific post by id
postRouter.get("/:post_id", async (req, res) => {
  const post_id = req.params.post_id;
  try {
    const queryText = "select * from post where post_id = $1";
    const posts = await query(queryText, [post_id]);
    // this is for empty database checking.
    const rows = posts.rows ? posts.rows : [];
    res.status(200).json(rows);
  } catch (err) {
    res.statusMessage = err;
    res.status(500).json({ error: err });
  }
});

// add a new post including a photo
postRouter.post("/new", upload.single("photo"), async (req, res) => {
  console.log(req.file);
  try {
    // need to get a time zone from frontend cookie I guess??
    const timestamp = moment().tz("Europe/Berlin").format();
    // Extract photo data from request
    const photoData = req.file ? req.file.buffer : null;
    const queryText =
      "insert into post (account_id, description, photo_data, date) values ($1, $2, $3, $4) returning *";
    const result = await query(queryText, [
      req.body.account_id,
      req.body.description,
      photoData,
      timestamp,
    ]);
    // res.status(200).json({ id: result.rows[0].accound_id });
    res.status(200).json(result.rows[0]);
  } catch (err) {
    // res.status(500).json({ error: err.message });
    res.status(500).json(err);
  }
});

module.exports = {
  postRouter,
};
