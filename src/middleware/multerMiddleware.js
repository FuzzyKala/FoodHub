const multer = require("multer");

// Create a multer middleware function for single file uploads
// const uploadPhoto = multer().single("photo");
// module.exports = { uploadPhoto };

// Multer storage configuration
const storage = multer.memoryStorage();
// Multer middleware for handling multiple file uploads
const upload = multer({ storage: storage, limits: { files: 3 } }).array(
  "photo",
  3
);

module.exports = { upload: upload };
