import express from "express";
import UserModel from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const router = express.Router();

// Middleware for JWT validation
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.user = decoded;
    next();
  });
};

// POST route to register a new user
router.post("/register", async (req, res) => {
  try {
    // Check if the email already exists
    const existingUser = await UserModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user
    const newUser = new UserModel({
      email: req.body.email,
      password: hashedPassword,
      name: req.body.name,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST route to authenticate and log in a user
router.post("/login", async (req, res) => {
  try {
    // Check if the email exists
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ error: "Invalid Email or Password" });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid Email or Password" });
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, "secret");
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Protected route to GET user details
router.get("/user", verifyToken, async (req, res) => {
  try {
    // Fetch user details using decoded token
    const user = await UserModel.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ email: user.email });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
