const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://Trago:Trago@cluster0.enq45fu.mongodb.net/mydatabase');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define schema and model for emails
const emailSchema = new mongoose.Schema({
  email: String,
});

const Email = mongoose.model('Email', emailSchema);

// Middleware
app.use(bodyParser.json());

// API endpoint for the action
app.post('/api/action', async (req, res) => {
  const { email } = req.body;

  try {
    // Perform action with the email
    // For example, you can save it to the database
    const newEmail = new Email({ email });
    await newEmail.save();

    // Send response back to the client
    res.status(200).json({ message: 'Action successful' });
  } catch (error) {
    console.error('Error performing action:', error);
    res.status(500).json({ error: 'Failed to perform action. Please try again later.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
