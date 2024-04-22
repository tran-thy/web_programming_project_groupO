const cors = require("cors");
const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

// Ha open Db
const openDb = () => {
    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    });
    return pool;
};
// Ha's port
const port = process.env.PORT;

// // Yanwen open Db
// const openDb = () => {
//     const pool = new Pool({
//         user: 'postgres',
//         host: 'localhost',
//         database: 'ChineseRecipes',
//         password: '83304127',
//         port: 5432
//     });
//     return pool;
// };
// // Yanwen's port
// const port = 3001;

const query = (sql, values = []) => {
    return new Promise(async(resolve, reject) => {
        try {
            const pool = openDb();
            const result = await pool.query(sql, values);
            resolve(result);
        } catch (error) {
            reject(error.message);
        }
    });
};

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Ha: route for fetching Vietnamese recipes
app.get("/Vietnamese_Recipes", async(req, res) => {
    console.log(query);
    try {
        const result = await query("SELECT * FROM Vietnamese_Recipes");
        const rows = result.rows ? result.rows : [];
        res.status(200).json(rows);
    } catch (error) {
        console.log(error);
        res.statusMessage = error;
        res.status(500).json({ error: error });
    }
});

// Ha: not yet test post
app.post("/Vietnamese_Recipes/new", async(req, res) => {
    console.log(req.body);
    try {
        const result = await query(
            "INSERT INTO Vietnamese_Recipes (dishid, dishname, dishdescription,dishhistory, dishimage, recipeingredients, recipeinstruction,dishVideo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", [
                req.body.dishid,
                req.body.dishname,
                req.body.dishdescription,
                req.body.dishhistory,
                req.body.dishimage,
                req.body.recipeingredients,
                req.body.recipeinstruction,
                req.body.dishvideo,
            ]
        );
        res.status(200).json({ dishid: result.rows[0].dishid });
    } catch (error) {
        console.error("Error inserting recipe:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Ha: for fetching a Vietanemse dish by its ID
app.get("/Vietnamese_Recipes/:id", async(req, res) => {
    const { id } = req.params; // Get the id from request parameters
    console.log(id); // Logging the id to verify

    try {
        const result = await query(
            "SELECT * FROM Vietnamese_Recipes WHERE dishid = $1", [id]
        );
        const rows = result.rows[0];
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//For comments
app.get("/cmt/:id", async(req, res) => {
    const { id } = req.params; // Get the dishId from request parameters

    try {
        // Query to get comments for the specified dishId
        const result = await query("SELECT * FROM comments WHERE dishId = $1", [
            id,
        ]);

        // Send the comments as a JSON response
        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Error fetching comments:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
// Ha: for add new comment
app.post("/cmt/new", async(req, res) => {
    // console.log(req.body);
    try {
        const result = await query(
            "INSERT INTO comments (commenter_name, comment_content, dishId) VALUES ($1, $2, $3) RETURNING *", [req.body.commenter_name, req.body.comment_content, req.body.dishId]
        );
        res.status(200).json({ comment_id: result.rows[0].comment_id });
    } catch (error) {
        console.error("Error inserting comment:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
// Ha: for deleting comment
app.delete("/cmt/delete/:id", async(req, res) => {
    const id_cmt = Number(req.params.id);
    try {
        const result = await query("delete from comments where comment_id = $1", [
            id_cmt,
        ]);
        res.status(200).json({ comment_id: id_cmt });
    } catch (error) {
        console.log(error);
        res.statusMessage = error;
        res.status(500).json({ error: error });
    }
});

//Ha: randame food
app.get("/randomFood", async(req, res) => {
    try {
        const result = await query(
            "SELECT * FROM Vietnamese_Recipes ORDER BY RANDOM() LIMIT 4"
        );
        const rows = result.rows ? result.rows : [];
        res.status(200).json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Route to get all recipes (both Vietnamese and Chinese)
app.get("/all", async(req, res) => {
    try {
        const vietnameseRecipes = await query("SELECT * FROM vietnamese_recipes");
        const chineseRecipes = await query("SELECT * FROM chinese_recipes");

        // Combine Vietnamese and Chinese recipes into a single array
        const allRecipes = [...vietnameseRecipes.rows, ...chineseRecipes.rows];

        res.status(200).json(allRecipes);
    } catch (error) {
        console.error("Error fetching all recipes:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Yanwen: route for fetching Chinese recipes
app.get('/recipes', (req, res) => {
    let page = req.query.page || 1; // Default to page 1 if no page parameter is provided
    const pageSize = 6; // Number of recipes per page

    if (page <= 1) {
        page = 1; // Ensure page number is at least 1
    }

    const pool = openDb();
    const offset = (page - 1) * pageSize;

    pool.query('SELECT * FROM chinese_recipes LIMIT $1 OFFSET $2', [pageSize, offset], (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
            console.log("this is navigation button")
        } else {
            res.status(200).json(result.rows);
        }
    });
});

// Yanwen: route for fetching random Chinese recipes
app.get('/random-recipes', async(req, res) => {
            try {
                // Count the total number of recipes in the database
                const countQuery = 'SELECT COUNT(*) FROM chinese_recipes';
                const pool = openDb();
                const countResult = await pool.query(countQuery);
                const totalCount = parseInt(countResult.rows[0].count);

                // Generate four unique random numbers within the range of total recipes
                let indexes = [];
                while (indexes.length < 4) {
                    const randomIndex = Math.floor(Math.random() * totalCount) + 1;
                    if (!indexes.includes(randomIndex)) {
                        indexes.push(randomIndex);
                    }
                }

                // Construct the dish IDs based on the format "CH-00X"
                const dishIds = indexes.map(index => 'CH-' + index.toString().padStart(4, '0'));

                // Query to fetch the random recipes from the database
                const query = {
                        text: `SELECT * FROM chinese_recipes WHERE dishid IN (${dishIds.map((_, i) => `$${i + 1}`).join(', ')})`,
  values: dishIds,
};

// Execute the query
const { rows } = await pool.query(query);

// Send the retrieved data as JSON response
res.json(rows);
} catch (error) {
console.error('Error fetching random recipes:', error.message);
res.status(500).json({ error: 'Internal Server Error' });
}
});

// Yanwen: for the search 
app.get('/search', async (req, res) => {
  const query = req.query.query || '';
  const page = req.query.page || ''; // Retrieve the page parameter from the request
  const keywords = query.split(' '); // Split by spaces
  const pool = openDb();
  try {
      let results = [];

      for (const keyword of keywords) {
          const { rows } = await pool.query(
              'SELECT * FROM chinese_recipes WHERE dishname ILIKE $1 OR dishdescription ILIKE $2',
              [`%${keyword}%`, `%${keyword}%`]
          );
          results = results.concat(rows);
      }

      if (page === 'home') {
          // Handle search results for the homepage
          res.json({ results });
      } else if (page === 'detail') {
          // Handle search results for the recipe detail page
          res.json({ results });
      } else {
          // Handle other cases
          res.json({ results });
      }
  } catch (error) {
      console.error('Error querying database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
})

// Yanwen: for fetching a Chinese dish by its ID 
app.get('/detailrecipe/:dishid', async (req, res) => {
  // const recipeId = req.query.recipeId; // Use req.query to get query parameters

const dishid = req.params.dishid;
const pool = openDb();
try {
    // Query to retrieve the recipe by ID
    const query = 'SELECT * FROM Chinese_Recipes WHERE dishid = $1';
    
    // Execute the query
    const result = await pool.query(query, [dishid]);

    // Check if a recipe was found
    if (result.rows.length === 0) {
        // If no recipe found with the provided ID, respond with 404 Not Found
        return res.status(404).json({ error: 'Recipe not found' });
    }

    // If recipe found, respond with the recipe details
    res.json(result.rows[0]);
} catch (error) {
    // If an error occurs during database query or processing, respond with 500 Internal Server Error
    console.error('Error fetching recipe details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
}
});

// Yanwen: Define for the favourite recipes in homepage (Hotpot)
app.get('/hotpotrecipes', async (req, res) => {
  const pool = openDb();
  try {
      const { rows } = await pool.query(
          'SELECT * FROM chinese_recipes WHERE dishname ILIKE $1 OR dishdescription ILIKE $2',
          ['%hot pot%', '%hot pot%']
      );
      res.json({ results: rows });
  } catch (error) {
      console.error('Error querying database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});