// api.test.js

const request = require('supertest');
const app = require('../app'); // Assuming your Express app is exported from app.js

describe('API Routes', () => {
  // Test case for POST /api/jobs
  test('POST /api/jobs - Add job entry', async () => {
    const response = await request(app)
      .post('/api/jobs')
      .send({
        userId: 'userId123',
        jobTitle: 'Software Engineer',
        company: 'ABC Company',
        salary: 90000,
        location: 'New York',
      });

    console.log('POST /api/jobs response:', response.body);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message', 'Job entry added successfully');
  });

  // Test case for GET /api/jobs
  test('GET /api/jobs - Retrieve all jobs', async () => {
    const response = await request(app).get('/api/jobs');

    console.log('GET /api/jobs response:', response.body);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  // Test case for GET /api/jobs/:jobTitle
  test('GET /api/jobs/:jobTitle - Retrieve job by title', async () => {
    const response = await request(app).get('/api/jobs/Software%20Engineer');

    console.log('GET /api/jobs/:jobTitle response:', response.body);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('jobTitle', 'Software Engineer');
  });

  // Test case for GET /api/averageSalary/:jobTitle
  test('GET /api/averageSalary/:jobTitle - Retrieve average salary by job title', async () => {
    const response = await request(app).get('/api/averageSalary/Software%20Engineer');

    console.log('GET /api/averageSalary/:jobTitle response:', response.body);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('averageSalary');
  });
});