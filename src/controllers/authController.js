require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/index");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const saltRounds = process.env.SALT_ROUNDS;
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, Number(saltRounds));
    // Create a new user
    const newUser = await User.createUser(username, email, hashedPassword);
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user by email
    const user = await User.findUserByEmail(email);
    // Verify user exists and check password
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { register, login };
