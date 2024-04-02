require("dotenv").config({ path: "./src/config/dotenv/.env" });
const express = require("express");
const cors = require("cors");
const { postRoutes, userRoutes } = require("../src/routes/index");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/posts", postRoutes);
app.use("/signup", userRoutes);

const port = process.env.PORT;
app.listen(port, console.log(`Port:${port} has been listening....`));
