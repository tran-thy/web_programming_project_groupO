const cors = require("cors");
const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

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
const port = process.env.PORT;

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
app.listen(port);
// Start the server

//get/post recipe

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

// not yet test post
app.post("/Vietnamese_Recipes/new", async(req, res) => {
    console.log(req.body);
    try {
        const result = await query(
            "INSERT INTO Vietnamese_Recipes (dishid, dishtype, dishname, dishdescription, dishimage, recipeingredients, recipeinstruction) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [
                req.body.dishid,
                req.body.dishtype,
                req.body.dishname,
                req.body.dishdescription,
                req.body.dishimage,
                req.body.recipeingredients,
                req.body.recipeinstruction,
            ]
        );
        res.status(200).json({ dishid: result.rows[0].dishid });
    } catch (error) {
        console.error("Error inserting recipe:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
//

// Backend API endpoint for fetching a dish by its ID
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
//randame food
// Endpoint to get random food data
app.get("/randomFood", async(req, res) => {
    try {
        const disData = await query("SELECT * FROM Vietnamese_Recipes");
        const rows = disData.rows || [];

        const randomIndex = Math.floor(Math.random() * rows.length);
        const randomItem = rows[randomIndex];
        res.json(randomItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
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
