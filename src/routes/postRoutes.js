const express = require("express");
const router = express.Router();
const { postController } = require("../controllers/index");
const { authMiddleware, multerMiddleware } = require("../middleware/index");

router.get("/latest", postController.getLatestPost);
router.get("/:id", postController.getPostById);
router.get("/", postController.getAllPosts);

router.post(
  "/new",
  authMiddleware.authenticateToken,
  multerMiddleware.uploadPhoto,
  postController.addNewPost
);
router.put(
  "/:id",
  authMiddleware.authenticateToken,
  postController.updatePostById
);
router.delete(
  "/:id",
  authMiddleware.authenticateToken,
  postController.deletePostById
);

// Exporting the router object to the router/index.js
module.exports = router;
