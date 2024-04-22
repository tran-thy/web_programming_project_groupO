const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

// Open the database connection
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "foodData",
    password: "root",
    port: 5432,
});

// Handle database connection error
pool.on("error", (err) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
});

// Function to determine dish type based on dishId
function getDishType(dishId) {
    return dishId.startsWith("VN") ? "Vietnamese" : "Chinese";
}

// Route to get all recipes (both Vietnamese and Chinese)
app.get("/all", (req, res) => {
    pool.query("SELECT * FROM vietnamese_recipes", (vietnameseError, vietnameseResult) => {
        if (vietnameseError) {
            res.status(500).json({ error: vietnameseError.message });
        } else {
            const vietnameseRecipes = vietnameseResult.rows.map(row => {
                row.dishtype = "Vietnamese";
                return row;
            });
            pool.query("SELECT * FROM chinese_recipes", (chineseError, chineseResult) => {
                if (chineseError) {
                    res.status(500).json({ error: chineseError.message });
                } else {
                    const chineseRecipes = chineseResult.rows.map(row => {
                        row.dishtype = "Chinese";
                        return row;
                    });
                    const allRecipes = [...vietnameseRecipes, ...chineseRecipes];
                    res.status(200).json(allRecipes);
                }
            });
        }
    });
});

// Route to get all Vietnamese recipes
app.get("/vietnamese", (req, res) => {
    pool.query("SELECT * FROM vietnamese_recipes", (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(200).json(result.rows);
        }
    });
});

// Route to get a Vietnamese recipe by dishId
app.get("/vietnamese/:dishId", (req, res) => {
    const dishId = req.params.dishId;
    pool.query(
        "SELECT * FROM vietnamese_recipes WHERE dishid = $1", [dishId],
        (error, result) => {
            if (error) {
                res.status(500).json({ error: error.message });
            } else {
                if (result.rows.length === 0) {
                    res.status(404).json({ error: "Dish not found" });
                } else {
                    res.status(200).json(result.rows[0]);
                }
            }
        }
    );
});

// // Route to get a recipe by dishId and recipe type
// app.get("/recipes/:recipeType/:dishId", (req, res) => {
//     const recipeType = req.params.recipeType;
//     const dishId = req.params.dishId;
//     let tableName;

//     // Determine the table name based on the recipe type
//     if (recipeType === 'vietnamese') {
//         tableName = 'vietnamese_recipes';
//     } else if (recipeType === 'chinese') {
//         tableName = 'chinese_recipes';
//     } else {
//         return res.status(400).json({ error: "Invalid recipe type" });
//     }

//     // Query the appropriate table
//     pool.query(
//         `SELECT * FROM ${tableName} WHERE dishid = $1`, [dishId],
//         (error, result) => {
//             if (error) {
//                 res.status(500).json({ error: error.message });
//             } else {
//                 if (result.rows.length === 0) {
//                     res.status(404).json({ error: "Dish not found" });
//                 } else {
//                     res.status(200).json(result.rows[0]);
//                 }
//             }
//         }
//     );
// });


// Route to get all Chinese recipes
app.get("/chinese", (req, res) => {
    pool.query("SELECT * FROM chinese_recipes", (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(200).json(result.rows);
        }
    });
});

// Route to get a Chinese recipe by dishId
app.get("/chinese/:dishId", (req, res) => {
    const dishId = req.params.dishId;
    pool.query(
        "SELECT * FROM chinese_recipes WHERE dishid = $1", [dishId],
        (error, result) => {
            if (error) {
                res.status(500).json({ error: error.message });
            } else {
                if (result.rows.length === 0) {
                    res.status(404).json({ error: "Dish not found" });
                } else {
                    res.status(200).json(result.rows[0]);
                }
            }
        }
    );
});

// Route to add a new recipe
app.post("/new", (req, res) => {
    const dishId = req.body.dishid;
    const dishType = getDishType(dishId);
    const tableName = dishType === "Vietnamese" ? "vietnamese_recipes" : "chinese_recipes";
    const query_post =
        `INSERT INTO ${tableName} (dishid, dishtype, dishname, dishdescription, dishimage, recipeingredients, recipeinstruction) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    const values_post = [
        req.body.dishid,
        dishType,
        req.body.dishname,
        req.body.dishdescription,
        req.body.dishimage,
        req.body.recipeingredients,
        req.body.recipeinstruction,
    ];
    pool.query(query_post, values_post, (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(200).json({ id: result.rows[0].dishid });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});