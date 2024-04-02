const express = require("express");
const router = express.Router();
const { postController } = require("../controllers/index");
const multer = require("multer");
const upload = multer();

router.get("/latest", postController.getLatestPost);
router.get("/:id", postController.getPostById);
router.get("/", postController.getAllPosts);

router.post("/new", upload.single("photo"), postController.addNewPost);
router.put("/:id", postController.updatePostById);
router.delete("/:id", postController.deletePostById);

// Exporting the router object to the router/index.js
module.exports = router;
