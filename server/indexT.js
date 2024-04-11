const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());


const port = 3001;

// Open the database connection
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'foodData',
    password: 'root',
    port: 5432
});

// Handle database connection error
pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

// Define the route
app.get('/', (req, res) => {
    pool.query('SELECT * FROM dishesData', (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(200).json(result.rows);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.post("/new", (req, res) => {
    const pool = openDb();
    const query_post = "INSERT INTO dishesData (dishid, dishtype, dishname, dishdescription, dishimage, recipeingredients, recipeinstruction) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    const values_post = [req.body.dishid, req.body.dishtype, req.body.dishname, req.body.dishdescription, req.body.dishimage, req.body.recipeingredients, req.body.recipeinstruction];
    pool.query(query_post, values_post, (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(200).json({ id: result.rows[0].dishid });
        }
    });
});