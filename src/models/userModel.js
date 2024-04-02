const { query } = require("./database");
const moment = require("moment-timezone");

class User {
  static async createUser(username, email, password) {
    try {
      const timestamp = moment.tz("Europe/Helsinki").format();
      const queryText =
        "INSERT INTO account (username, email, password, date) VALUES ($1, $2, $3, $4) RETURNING *";
      const result = await query(queryText, [
        username,
        email,
        password,
        timestamp,
      ]);
      return result.rows[0];
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = User;
