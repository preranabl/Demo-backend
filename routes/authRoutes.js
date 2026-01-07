const express = require("express");
const router = express.Router();

// POST /api/register
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  // Basic validation (backend responsibility)
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters",
    });
  }

  // Database will come later
  console.log("Received from frontend:", req.body);

  return res.status(201).json({
    message: "User registered successfully (backend)",
    user: {
      name,
      email,
    },
  });
});

module.exports = router;
