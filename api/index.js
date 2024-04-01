require("dotenv").config({ path: "./src/config/dotenv/.env" });
const express = require("express");
const cors = require("cors");
const postRoutes = require("../src/routes/postRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("../dist"));
app.use("/posts", postRoutes);

const port = process.env.PORT;
app.listen(port, console.log(`Port:${port} has been listening....`));
