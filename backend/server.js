require("dotenv").config();
const express = require("express");
const cors = require(cors);
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;

app.listen(port, console.log(`Port:${port} has been listening....`));
