const express = require("express");
const { query } = require("../query/db");
const postRouter = express.Router();

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

module.exports = {
  postRouter,
};
