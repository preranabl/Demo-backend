require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:3000", // frontend port
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());

// Database connection (to Database Tier)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Backend connected to Database"))
  .catch((err) => console.error(err));

// Routes
app.use("/api", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});