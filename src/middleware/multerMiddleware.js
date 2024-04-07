const multer = require("multer");

// Create a multer middleware function for multiple file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage, limits: { files: 3 } }).array(
  "photo",
  3
);

module.exports = { upload: upload };
