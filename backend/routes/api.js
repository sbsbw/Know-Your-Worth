const express = require('express'); // for web server
const router = express.Router(); // for API routes
// const User = require('../models/user'); // for user model
const Job = require('../models/jobs'); // for job model
// const Average = require('../models/average');  // for average model


// Get all jobs
router.get('/jobs', async (req, res, next) => {
  try {
    const jobs = await Job.find(); // Retrieve all jobs from the database
    // Log the retrieved jobs to the console
    // console.log('Retrieved jobs:', jobs);
    res.status(200).json(jobs); // Return the jobs as JSON
  } catch (error) {
    next(error);
  }
});

// Error handling middleware
router.use((error, req, res, next) => {
  res.status(500).json({ error: error.message });
});

// Export router
module.exports = router;
