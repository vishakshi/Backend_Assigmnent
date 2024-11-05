const express = require('express');
const authController =  require("../controllers/authControllers");; // Import the authController
const router = express.Router();

// Route for registering a new user
router.post('/register', authController.register); // Add registration route
// Route for logging in and generating a token
router.post('/login', authController.login); // Use the login function from authController

module.exports = router;
