const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors()); // allows frontend to talk to backend
app.use(express.json()); // parse JSON body

// Routes
app.use("/api", authRoutes);

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
