const express = require('express'); // for web server
const mongoose = require('mongoose'); // for database
const cors = require('cors');
const apiRoutes = require('./routes/api'); // for API routes
const helmet = require('helmet'); // for basic security measures
const { PORT, mongodbUrl } = require('./config'); // Use require for config

const app = express();

// Use helmet for basic security measures
app.use(helmet());

// Use cors middleware to handle CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Database connection
mongoose
  .connect(mongodbUrl)
  .then(() => {
    console.log('MongoDB Connected...');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`); // log server start
    });
  })
  .catch((err) => {
    console.error(err); 
  });

// Route for handling API requests
app.use('/api', apiRoutes);

app.use('/api', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
})
// Error handling middleware for global errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});