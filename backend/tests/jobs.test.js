const mongoose = require('mongoose');
const Job = require('../models/jobs');

describe('Job Model', () => {
  // Run this hook before each test case
  beforeEach(async () => {
    // Clear the database before each test
    await Job.deleteMany();
  });

  // Test case for adding a job entry
  test('Add job entry', async () => {
    const newJob = {
      userId: 'userId123',
      jobTitle: 'Software Engineer',
      company: 'ABC Company',
      salary: 90000,
      location: 'New York',
    };

    const savedJob = await Job.create(newJob);

    expect(savedJob.userId).toBe(newJob.userId);
    expect(savedJob.jobTitle).toBe(newJob.jobTitle);
    expect(savedJob.company).toBe(newJob.company);
    expect(savedJob.salary).toBe(newJob.salary);
    expect(savedJob.location).toBe(newJob.location);
  });

  // Test case for retrieving all jobs
  test('Retrieve all jobs', async () => {
    const jobs = await Job.find();

    expect(Array.isArray(jobs)).toBe(true);
    expect(jobs.length).toBe(0);
  });
});
