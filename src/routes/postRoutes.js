const express = require("express");
const router = express.Router();
const postController = require("../controllers/index");
const multer = require("multer");
const upload = multer();

router.get("/latest", postController.getLatestPostController);
router.get("/:id", postController.getPostByIdController);
router.get("/", postController.getAllPostsController);

router.post(
  "/new",
  upload.single("photo"),
  postController.addNewPostController
);
router.put("/:id", postController.updatePostById);
router.delete("/:id", postController.deletePostById);
module.exports = router;
