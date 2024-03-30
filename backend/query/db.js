require("dotenv").config();
const { Client } = require("pg");
const fs = require("fs");
const path = require("path");

// Connection config
// const rejectUnauthorized = process.env.rejectUnauthorized;
// const ca = fs.readFileSync(path.resolve(__dirname, "ca.pem")).toString();

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PW,
  port: process.env.DB_PORT,
  ssl: true,
};

const client = new Client(config);

// Connect to the database
client
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL database - db.js");
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL database:", err);
  });

// Define a function to execute queries
const query = async (sql, values = []) => {
  try {
    const result = await client.query(sql, values);

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  query,
};
