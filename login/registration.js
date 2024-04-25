// just like index file
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const { query } = require('./db.js');
const { userRouter } = require('./user.js'); // Import userRouter correctly

const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/user', userRouter); // Use userRouter with proper path

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});










// // Import required modules
// const express = require('express');
// const bodyParser = require('body-parser');
// const { Pool } = require('pg');

// // Create Express app
// const app = express();
// const port = 3000;

// // Middleware to parse JSON bodies
// app.use(bodyParser.json());

// // Database connection pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'login',
//   password: 'root',
//   port: 5432,
// });

// // API endpoint for user registration
// app.post('/register', async (req, res) => {
//   const { email, username, password } = req.body;

//   // Insert user into the database
//   try {
//     const query = 'INSERT INTO users (email, username, password) VALUES ($1, $2, $3)';
//     await pool.query(query, [email, username, password]);
//     res.status(201).send('User registered successfully!');
//   } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).send('Error registering user');
//   }
// });
// // Test route for inserting dummy data
// app.post('/test-insert', async (req, res) => {
//   try {
//     // Perform database operation (insert dummy data)
//     const query = 'INSERT INTO test_table (name) VALUES ($1)';
//     await pool.query(query, ['Dummy Data']);
    
//     res.status(200).send('Dummy data inserted successfully');
//   } catch (error) {
//     console.error('Error inserting dummy data:', error);
//     res.status(500).send('Error inserting dummy data');
//   }
// });
// // Route handler for the root path
// app.get('/registration', (req, res) => {
//     res.send('Server is running.');
//   });
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });
// Import required modules
// ---------------------------------------------------
// const express = require('express');
// const bodyParser = require('body-parser');
// const { Pool } = require('pg');
// const cors = require('cors');


// // Create Express app
// const app = express();
// const port = 3000;

// // Middleware to parse JSON bodies
// // app.use(bodyParser.json());
// app.use(cors());
// app.use(express.json());
// // Database connection pool
// const openDb = () => {
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'login',
//   password: 'yexijun9717',
//   port: 5432,
// })};

// // API endpoint for user registration
// app.post('/register', async (req, res) => {
//   const { email, username, password } = req.body;

//   // Insert user into the database
//   try {
//     const query = 'INSERT INTO users (email, username, password) VALUES ($1, $2, $3)';
//     await pool.query(query, [email, username, password]);
//     res.status(201).send('User registered successfully!');
//   } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).send('Error registering user');
//   }
// });

// // Test route for inserting dummy data
// app.post('/test-insert', async (req, res) => {
//   try {
//     // Perform database operation (insert dummy data)
//     const query = 'INSERT INTO test_table (name) VALUES ($1)';
//     await pool.query(query, ['Dummy Data']);
    
//     res.status(200).send('Dummy data inserted successfully');
//   } catch (error) {
//     console.error('Error inserting dummy data:', error);
//     res.status(500).send('Error inserting dummy data');
//   }
// });

// // Route handler for the root path
// app.get('/', (req, res) => {
//     res.send('Server is running.');
//   });

// // Route handler to check database connection
// app.get('/check-db-connection', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT $1::text as message', ['Connected to database successfully']);
//     res.send(result.rows[0].message);
//   } catch (error) {
//     console.error('Error connecting to database:', error);
//     res.status(500).send('Error connecting to database');
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });

// app.get ('/', async(req, res) => {
//   try{
//     const result = ('SELECT * FROM login');
    
//  const rows = result.rows ? result.rows : []
//     res.status(200).json(rows)
//   }
//   catch(error){res.statusMessage = error;
//     res.status(500).json({error: error});
//   }
// });
// // Database connection pool
// const openDb = () => {
//   const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'login',
//     password: 'yexijun9717',
//     port: 5432,
//   });
//   return pool; // Return the pool object
// };
// // Start the server
