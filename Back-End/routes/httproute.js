const express = require('express');

const app = express();

// Define a route for GET requests
app.get('/api/users', (req, res) => {
    // Handle the GET request logic here
    res.send('This is the GET route for users');
});

// Define a route for POST requests
app.post('/api/users', (req, res) => {
    // Handle the POST request logic here
    res.send('This is the POST route for users');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});