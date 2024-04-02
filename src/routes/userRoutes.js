const express = require("express");
const router = express.Router();
const userController = require("../controllers/index");

// Define routes for user actions (signup, login, profile updates, etc.)

router.post("/", userController.signup);
// router.post("/login", userController.login);
// router.put("/profile", userController.updateProfile);

module.exports = router;
