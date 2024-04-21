// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

// Create Express app
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Database connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'login',
  password: 'root',
  port: 5432,
});

// API endpoint for user registration
app.post('/register', async (req, res) => {
  const { email, username, password } = req.body;

  // Insert user into the database
  try {
    const query = 'INSERT INTO users (email, username, password) VALUES ($1, $2, $3)';
    await pool.query(query, [email, username, password]);
    res.status(201).send('User registered successfully!');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Error registering user');
  }
});
// Test route for inserting dummy data
app.post('/test-insert', async (req, res) => {
  try {
    // Perform database operation (insert dummy data)
    const query = 'INSERT INTO test_table (name) VALUES ($1)';
    await pool.query(query, ['Dummy Data']);
    
    res.status(200).send('Dummy data inserted successfully');
  } catch (error) {
    console.error('Error inserting dummy data:', error);
    res.status(500).send('Error inserting dummy data');
  }
});
// Route handler for the root path
app.get('/', (req, res) => {
    res.send('Server is running.');
  });
// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
