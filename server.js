const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const vendorRoutes = require("./routes/vendorRoute");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing JSON request bodies

// Connect to database
connectDB();
 
// Routes
app.use("/api/", vendorRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
