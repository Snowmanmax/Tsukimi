const Contact = require('../models/contact');

exports.submitContactForm = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newContact = new Contact({ name, email, message });
  newContact.save((err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to save contact message' });
    }
    res.status(200).json({ message: 'Contact message sent successfully' });
  });
};