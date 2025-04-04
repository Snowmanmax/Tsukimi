const express = require('express');
const router = express.Router();
const path = require('path'); // Add this line
const contactController = require('../controllers/contactController');

// Serve HTML file
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Handle contact form submission
router.post('/contact', contactController.submitContactForm);

module.exports = router;