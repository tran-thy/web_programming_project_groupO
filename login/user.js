const express = require('express');
const { query } = require('./db.js');

const userRouter = express.Router();

// Middleware to parse JSON request bodies
userRouter.use(express.json());


// Route handler for user login
userRouter.post("/login", async (req, res) => {
  try {
  
    const sql = "select * from login where email = $1";
    const result = await query(sql, [req.body.email]);

    if (result.rowCount === 1) {
      if (result.rows[0].password === req.body.password) {
        res.status(200).json(result.rows[0]); 
      } else {
        res.statusMessage = "Invalid login";
        res.status(401).json({ error: "Invalid login" });
      }
    } else {
      res.statusMessage = "Invalid login";
      res.status(401).json({ error: "Invalid login" });
    }
  } catch (error) {
    res.statusMessage = "Internal server error";
    res.status(500).json({ error: "Internal server error" });
  }
});

userRouter.post("/register", async (req, res) => {
  try {
    
    const sql = "insert into login (email, password, username) values ($1, $2, $3) returning id";
    const result = await query(sql, [req.body.email, req.body.password, req.body.username]);

    res.status(200).json({ id: result.rows[0].id });
  } catch (error) {
    res.statusMessage = error;
    res.status(500).json({ error: error});
  }
});

module.exports = { userRouter }; 
