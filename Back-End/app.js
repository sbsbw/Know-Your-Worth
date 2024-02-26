// app.js
const express = require('express');
const mongoose = require('mongoose');
const searchRoutes = require('./routes/searchRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb-uri', { useNewUrlParser: true, useUnifiedTopology: true });

// Use middleware to parse incoming JSON requests
app.use(express.json());

// Use the search route
app.use('/search', searchRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
