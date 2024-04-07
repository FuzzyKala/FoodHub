const express = require("express");
const router = express.Router();
const { userController } = require("../controllers/index");
const { userExistingMiddleware } = require("../middleware/index");

// Define routes for user actions (signup, login, profile updates, etc.)
router.post(
  "/register",
  userExistingMiddleware.userExisting,
  userController.register
);
router.post("/login", userController.login);

// router.put("/profile", userController.updateProfile);

// Exporting the router object to the router/index.js
module.exports = router;
