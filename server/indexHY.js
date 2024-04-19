const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();

app.use(cors());
app.use(express.json());

const port = 3001;

// Define route handler for fetching recipes
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

//for the homepage recommended recipes
// app.get('/random-recipes', async (req, res) => {
    // try {
      ////Count the total number of recipes in the database
    //   const countQuery = 'SELECT COUNT(*) FROM Chinese_Recipes';
    //   const countResult = await pool.query(countQuery);
    //   const totalCount = parseInt(countResult.rows[0].count);
//   
      //Generate two random numbers within the range of total recipes
    //   const index1 = Math.floor(Math.random() * totalCount) + 1;
    //   let index2 = Math.floor(Math.random() * totalCount) + 1;
    //   
      //Ensure index2 is different from index1
    //   while (index2 === index1) {
        // index2 = Math.floor(Math.random() * totalCount) + 1;
    //   }
//   
      //Query to fetch the random recipes from the database
    //   const query = {
        // text: 'SELECT * FROM Chinese_Recipes WHERE dishID = $1 OR dishID = $2',
        // values: [index1, index2],
    //   };
//   
      //Execute the query
    //   const { rows } = await pool.query(query);
//   
      //Send the retrieved data as JSON response
    //   res.json(rows);
    // } catch (error) {
    //   console.error('Error fetching random recipes:', error.message);
    //   res.status(500).json({ error: 'Internal Server Error' });
    // }
//   });
// 



// Define route handler for searching recipes
// app.get('/search', async (req, res) => {
    // const query = req.query.query || '';
    // const keywords = query.split('+');
    // const pool = openDb();
    // try {
        // let results = [];
// 
        // for (const keyword of keywords) {
            // const { rows } = await pool.query(
                // 'SELECT * FROM chinese_recipes WHERE recipe_name ILIKE $1 OR description ILIKE $1',
                // [`%${keyword}%`]
            // );
            // results = results.concat(rows);
        // }
// 
        // res.json({ results });
    // } catch (error) {
        // console.error('Error querying database:', error);
        // res.status(500).json({ error: 'Internal Server Error' });
    // }
// });
// 
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


// Define route handler for searching recipes
// app.get('/search', async (req, res) => {
    // const query = req.query.query || '';
    // const keywords = query.split(' '); // Split by spaces
    // const pool = openDb();
    // try {
        // let results = [];
// 
        // for (const keyword of keywords) {
            // const { rows } = await pool.query(
                // 'SELECT * FROM chinese_recipes WHERE dishname ILIKE $1 OR dishdescription ILIKE $2',
                // [`%${keyword}%`, `%${keyword}%`]
            // );
            // results = results.concat(rows);
        // }
// 
        // res.json({ results });
    // } catch (error) {
        // console.error('Error querying database:', error);
        // res.status(500).json({ error: 'Internal Server Error' });
    // }
// });
// 

//Define route handler for searching recipes
// app.get('/searchondetail', async (req, res) => {
    // const query = req.query.query || '';
    // const keywords = query.split(' '); // Split by spaces
    // const pool = openDb();
    // try {
        // let results1 = [];
// 
        // for (const keyword of keywords) {
            // const { rows } = await pool.query(
                // 'SELECT * FROM chinese_recipes WHERE dishname ILIKE $1 OR dishdescription ILIKE $2',
                // [`%${keyword}%`, `%${keyword}%`]
            // );
                    //  
            // results1 = results1.concat(rows);
        // }
// 
        // res.json({ results1 });
    // } catch (error) {
        // console.error('Error querying database:', error);
        // res.status(500).json({ error: 'Internal Server Error' });
    // }
// });
// app.get('/search', async (req, res) => {
    // const query = req.query.query || '';
    // const keywords = query.split(' '); // Split by spaces
    // const pool = openDb();
    // try {
        // let results = [];
// 
        // for (const keyword of keywords) {
            // const { rows } = await pool.query(
                // 'SELECT * FROM chinese_recipes WHERE recipe_name ILIKE $1 OR description ILIKE $2',
                // [`%${keyword}%`, `%${keyword}%`] );
            // results = results.concat(rows);
        // }
// 
        // res.json({ results });
    // } catch (error) {
        // console.error('Error querying database:', error);
        // res.status(500).json({ error: 'Internal Server Error' });
    // }
// });
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







// define for the favourite recipes in homepage:
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



// Define route handler for adding a new recipe
app.post("/newrecipe", (req, res) => {
    const pool = openDb();
    const query_post = "INSERT INTO chinese_recipes (recipe_id, recipe_name, description, image_file) VALUES ($1, $2, $3, $4) RETURNING *";
    const values_post = [req.body.recipe_id, req.body.recipe_name, req.body.description, req.body.image_file];
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
        user: 'postgres',
        host: 'localhost',
        database: 'ChineseRecipes',
        password: '83304127',
        port: 5432
    });
    return pool;
};

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})