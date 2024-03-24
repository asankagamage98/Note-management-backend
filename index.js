// Load environment variables from .env file
require("dotenv").config();

// Import required modules
const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./src/utils/dbConnection");
const bodyParser = require("body-parser");

// Connect to the database
dbConnect();

// Import routes
const noteRouter = require("./src/routes/note.router");

// Create an Express application
const app = express();

// Enable CORS
app.use(cors());

// Parse incoming JSON requests
app.use(bodyParser.json());

// Define a default route
app.get("/", (req, res) => {
  res.send("Unwir Assessment Service");
});

// Define routes for notes
app.use("/api/note", noteRouter);

// Define the port to listen on
const PORT = process.env.PORT;

// Start the server
app.listen(PORT, () => {
  console.info(`Backend running on http://localhost:${PORT}`);
});
