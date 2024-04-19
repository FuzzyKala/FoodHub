require("dotenv").config({ path: "../config/dotenv/.env" });
const { Pool } = require("pg");
const moment = require("moment");
const databaseConfig = require("../config/database/config");
const pool = new Pool(databaseConfig);

// Define a function to execute queries
const query = async (sql, values = []) => {
  try {
    return pool
      .query(sql, values)
      .then((result) => {
        result.rows = result.rows.map((row) => {
          if (row.date instanceof Date) {
            row.date = moment().format();
            console.log("row.date", row.date);
          }
          return row;
        });
        // console.log("result", result);
        return result;
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  query,
};
