const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const apiRoutes = require('./routes/api');
const helmet = require('helmet'); // for basic security measures

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/your-database-name', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

app.use(helmet()); // sets various HTTP headers to help protect your app
app.use(express.json());
app.use('/api', apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
