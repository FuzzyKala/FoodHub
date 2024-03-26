const express = require("express");
const { query } = require("../query/db");
const postRouter = express.Router();
const moment = require("moment-timezone");

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

postRouter.post("/new", async (req, res) => {
  try {
    // need to get a time zone from frontend cookie I guess??
    const timestamp = moment().tz("Europe/Berlin").format();
    const result = await query(
      "insert into post (account_id, description, date) values ($1, $2, $3) returning *",
      [req.body.account_id, req.body.description, timestamp]
    );
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
