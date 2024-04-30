require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const { postRoutes, userRoutes } = require("./src/routes/index");
const { generateJWTSecret } = require("./src/config/jwt/generateJWTSecret");

const { Pool } = require("pg");
const databaseConfig = require("./src/config/database/config");
const pool = new Pool(databaseConfig);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

app.post("/newRate", (req, res) => {
  const { post_id, rate } = req.body;
  pool.query(
    "INSERT INTO star (post_id,rate) VALUES ($1,$2) returning *",
    [post_id, rate],
    (error, result) => {
      if (error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(200).json({ id: result.rows[0].id });
      }
    }
  );
});

app.post("/newComment", (req, res) => {
  //const { articleId } = req.params;
  const { post_id, account_id, comment, date } = req.body;
  pool.query(
    "INSERT INTO comment (post_id, account_id, comment,date) VALUES ($1,$2,$3,$4) returning *",
    [post_id, account_id, comment, date],
    (error, result) => {
      if (error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(200).json({ id: result.rows[0].id });
      }
    }
  );
});

// generateJWTSecret();
const port = process.env.PORT;
app.listen(port, console.log(`Port:${port} has been listening....`));
