require("dotenv").config({ path: "../config/dotenv/.env" });
const { Pool } = require("pg");
const databaseConfig = require("../config/database/config");
const pool = new Pool(databaseConfig);

// Define a function to execute queries
const query = async (sql, values = []) => {
  try {
    const result = await pool.query(sql, values);
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  query,
};
