const express = require("express");
const router = express.Router();
const { authController } = require("../controllers/index");

// Define routes for user actions (signup, login, profile updates, etc.)
router.post("/register", authController.register);
router.post("/login", authController.login);

// router.put("/profile", userController.updateProfile);

// Exporting the router object to the router/index.js
module.exports = router;
