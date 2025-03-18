require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware (if needed)
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Test route
app.get('/', (req, res) => res.send('Server is running'));

// Start the server
app.listen(3001, () => console.log('Server running on port 3001'));
