const express = require("express");
const router = express.Router();
const { userController } = require("../controllers/index");

// Define routes for user actions (signup, login, profile updates, etc.)
router.post("/", userController.userSignUp);
// router.post("/login", userController.login);
// router.put("/profile", userController.updateProfile);

// Exporting the router object to the router/index.js
module.exports = router;
