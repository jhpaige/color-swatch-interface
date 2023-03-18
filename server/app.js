// Load environment variables from .env file
require('dotenv').config();

// Import required packages
const express = require("express");
const path = require("path");
const cors = require("cors");
const controller = require(path.join(__dirname + "/colorsController"));

// Create a router object
const router = express.Router();

// Create an instance of the express application
const app = express();

// Parse incoming JSON data
app.use(express.json());
// Parse incoming URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors({
  origin: '*'
}));

// Mount the router at the root path of the application
app.use('/', router);

// Define a route to get color information
router.get('/api', controller.getColors, (req, res) => {
  // Respond with the color information
  res.status(200).json(res.locals.colorsInfo);
});

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname + '/build')));

// Handle requests for nonexistent routes
app.use((req, res) => res.status(404).send('This page does not exist'));

// Global error handler
app.use((err, req, res, next) => {
  // Log the error message and request query
  const defaultErr = {
      // Default error object
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred'},
  };
  // Merge the default error object with the actual error object
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  // Send an error response with the error message
  return res.status(errorObj.status).json(errorObj.message);
});

// Start the application on port 3001
app.listen(3001, () => {
  console.log('Server listening on Port: 3001');
});

// Export the express application
module.exports = app;