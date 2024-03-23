const express = require('express'); // for web server
const router = express.Router(); // for API routes
// const User = require('../models/user'); // for user model
const Job = require('../models/jobs'); // for job model
// const Average = require('../models/average');  // for average model

// backend test 
router.post('/jobs', async (req, res, next) => {
  try {
    const job = new Job({
      userId: req.body.userId,
      jobTitle: req.body.jobTitle,
      company: req.body.company,
      salary: req.body.salary,
      location: req.body.location,
    });
    await job.save();
    res.status(201).json({ message: 'Job entry added successfully' });
  } catch (error) {
    next(error);
  }
});

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
// Route to retrieve a job by its title
router.get('/jobs/:jobTitle', async (req, res) => {
  const { title } = req.params;
  try {
    const jobByTitle = await Job.findOne({ jobTitle: title });
    res.json(jobByTitle);
  } catch (error) {
    console.error('Error retrieving job:', error);
    res.status(500).json({ error: 'Error retrieving job' });
  }
});


// Route to return the average salary of people with a specific job title
router.get('/averageSalary/:jobTitle', async (req, res) => {
  const { jobTitle } = req.params;
  
  try {
    const averageSalary = await Job.aggregate([
      { $match: { jobTitle } }, // Match jobs with the specified job title
      { $group: { _id: null, averageSalary: { $avg: '$salary' } } }, // Calculate the average salary
    ]);
    
    if (averageSalary.length === 0) {
      return res.status(404).json({ error: 'No jobs found with the specified job title' });
    }
    
    res.json({ averageSalary: averageSalary[0].averageSalary });
  } catch (error) {
    console.error('Error calculating average salary:', error);
    res.status(500).json({ error: 'Error calculating average salary' });
  }
});


// Error handling middleware
router.use((error, req, res, next) => {
  res.status(500).json({ error: error.message });
});



// Export router
module.exports = router;
