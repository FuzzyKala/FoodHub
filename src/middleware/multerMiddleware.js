const multer = require("multer");

// Create a multer middleware function for single file uploads
const uploadPhoto = multer().single("photo");

module.exports = { uploadPhoto };
