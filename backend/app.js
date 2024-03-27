const express = require('express'); // for web server
const mongoose = require('mongoose'); // for database
const apiRoutes = require('./routes/api'); // for API routes
const helmet = require('helmet'); // for basic security measures
const { PORT, mongodbUrl } = require('./config'); // Use require for config

const app = express(); // create express app

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

app.get('/', (req, res) => {
  console.log(req);
  return res.status(200).send('you did it!');
});

app.use(helmet()); // sets various HTTP headers to help protect your app
app.use(express.json()); // parses incoming requests with JSON payloads
app.use('/api', apiRoutes); // use API routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
