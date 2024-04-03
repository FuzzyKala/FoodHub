const postRoutes = require("./postRoutes");
const userRoutes = require("./authRoutes");

// Exporting an object with all the routes to the server index.js
module.exports = { postRoutes, userRoutes };
