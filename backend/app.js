const express = require('express'); // for web server
const mongoose = require('mongoose'); // for database
const bcrypt = require('bcrypt'); // for password hashing
const apiRoutes = require('./routes/api'); // for API routes
const helmet = require('helmet'); // for basic security measures

const app = express(); // create express app
const PORT = process.env.PORT || 3000; // port number for server

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/salary', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message); 
    process.exit(1); // Exit process with failure
  }
};

connectDB();  // Connect to MongoDB

app.use(helmet()); // sets various HTTP headers to help protect your app
app.use(express.json()); // parses incoming requests with JSON payloads
app.use('/api', apiRoutes); // use API routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // log server start
});
