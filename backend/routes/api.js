const express = require('express'); // for web server
const router = express.Router(); // for API routes
const bcrypt = require('bcrypt'); // for password hashing
const User = require('../models/user'); // for user model
const Job = require('../models/jobs'); // for job model
const Average = require('../models/average');  // for average model

// User registration
router.post('/register', async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    next(error);
  }
});

// Add job entry
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

// Calculate and update averages based on user's location
router.post('/calculateAverages', async (req, res, next) => {
  try {
    const locations = await Job.distinct('location');
    for (const location of locations) {
      const averageSalary = await Job.aggregate([
        { $match: { location } },
        { $group: { _id: null, averageSalary: { $avg: '$salary' } } },
      ]);
      const average = new Average({
        location,
        averageSalary: averageSalary.length ? averageSalary[0].averageSalary : 0,
      });
      await average.save();
    }
    res.status(200).json({ message: 'Averages calculated and updated successfully' });
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
