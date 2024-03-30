require("dotenv").config();
// const { Client } = require("pg");
const { Pool } = require("pg");
// const fs = require("fs");
// const path = require("path");

// // Connection config
// const config = {
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PW,
//   port: process.env.DB_PORT,
//   ssl: true,
// };

// // Connect to the database
// const client = new Client(config);
// client
//   .connect()
//   .then(() => {
//     console.log("Connected to PostgreSQL database - db.js");
//   })
//   .catch((err) => {
//     console.error("Error connecting to PostgreSQL database:", err);
//   });

// // Define a function to execute queries
// const query = async (sql, values = []) => {
//   try {
//     const result = await client.query(sql, values);

//     return result;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// // Connection config
const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PW,
  port: process.env.DB_PORT,
  ssl: true,
};

const pool = new Pool(config);

// Define a function to execute queries
const query = async (sql, values = []) => {
  try {
    const result = await pool.query(sql, values);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  query,
};
