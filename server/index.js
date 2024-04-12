const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const app = express();

app.use(cors());
app.use(express.json());

const port = 3001;

// Define route handler for fetching recipes
app.get("/recipes", (req, res) => {
  let page = req.query.page || 1; // Default to page 1 if no page parameter is provided
  const pageSize = 6; // Number of recipes per page

  if (page <= 1) {
    page = 1; // Ensure page number is at least 1
  }

  const pool = openDb();
  const offset = (page - 2) * pageSize;

  pool.query(
    "SELECT * FROM chinese_recipes LIMIT $1 OFFSET $2",
    [pageSize, offset],
    (error, result) => {
      if (error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(200).json(result.rows);
      }
    }
  );
});

// Define route handler for adding a new recipe
// INSERT INTO Chinese_Recipes (recipe_id, recipe_name, description, image_file)
// VALUES (1, 'Big Plate Chicken', 'Spicy chicken with potatoes',
// '/css/dapanji.jpg');
// INSERT INTO Chinese_Recipes (recipe_id, recipe_name, description, image_file
app.post("/newrecipe", (req, res) => {
  const pool = openDb();
  const query_post =
    "INSERT INTO chinese_recipes ((recipe_id, recipe_name, description, image_file) VALUES ($1) RETURNING *";
  const values_post = [
    req.body.recipe_id,
    req.body.recipe_name,
    req.body.description,
    req.body.image_file,
  ];
  pool.query(query_post, values_post, (error, result) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json({ id: result.rows[0].id });
    }
  });
});

const openDb = () => {
  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "ChineseRecipes",
    password: "83304127",
    port: 5432,
  });
  return pool;
};

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
