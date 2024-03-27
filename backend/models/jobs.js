const mongoose = require('mongoose'); // for database connection
const {mongodbUrl} = require('../config'); // Use require for config

// Define job schema
const jobSchema = new mongoose.Schema({
  userId: { type: String, ref: 'User', required: true },
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  salary: { type: Number, required: true },
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Define job model
const Job = mongoose.model('Job', jobSchema);

// Connect to MongoDB
mongoose.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected...');

    // Query the database to retrieve all jobs
    Job.find()
      .then(jobs => {
        // Print the retrieved jobs to the console
        console.log('Retrieved jobs:', jobs);
      })
      .catch(error => {
        console.error('Error retrieving jobs:', error);
      });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

  module.exports = Job; // Export the Job model
