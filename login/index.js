const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); // Enable CORS middleware

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ChineseRecipes',
  password: '83304127',
  port: 5432
});

const query = (sql, values = []) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await pool.query(sql, values);
      resolve(result);
    } catch (error) {
      reject(error.message);
    }
  });
}

const userRouter = express.Router();

// Middleware to parse JSON request bodies
userRouter.use(express.json());

// Route handler for user login
userRouter.post("/login", async (req, res) => {
  try {
    const sql = "select * from login where email = $1";
    const result = await query(sql, [req.body.email]);

    if (result.rowCount === 1 && result.rows[0].password === req.body.password) {
      res.status(200).json(result.rows[0]); 
    } else {
      res.status(401).json({ error: "Invalid login" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

userRouter.post("/register", async (req, res) => {
  try {
    const sql = "insert into login (email, password, username) values ($1, $2, $3) returning id";
    const result = await query(sql, [req.body.email, req.body.password, req.body.username]);
    res.status(200).json({ id: result.rows[0].id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Use userRouter with proper path
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});