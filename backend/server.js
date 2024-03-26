require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { postRouter } = require("./routes/post");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", postRouter);
const port = process.env.PORT;

app.listen(port, console.log(`Port:${port} has been listening....`));
