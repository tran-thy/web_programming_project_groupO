// document.addEventListener("DOMContentLoaded", function() {
    // const button1 = document.querySelector('.pagination-button'); // Use class selector
    // if (button1) {
        // button1.addEventListener('click', () => {
            // console.log("Button clicked!");
            // const div1 = document.querySelector('.container'); // Corrected selector
            // const input1 = document.createElement('input');
            // div1.appendChild(input1);
            // Rest of your code
        // });
    // } else {
        // console.error("Button with class 'pagination-button' not found.");
    // }
// });
// 


const BACKEND_ROOT_URL = 'http://localhost:3001';
// console.log("Window width: " + window.innerWidth + " pixels");
const fetchRecipesForPage = async (page) => {
    try {
       

        const response = await fetch(`${BACKEND_ROOT_URL}/recipes?page=${page}`);
        if (!response.ok) {
            throw new Error('Failed to fetch recipes');
        }
        const recipes = await response.json();
        displayRecipes(recipes);
    } catch (error) {
        alert("Error fetching recipes: " + error.message);
    }
};

// Function to display recipes on the frontend
const displayRecipes = (recipes) => {
    const recipeContainer = document.querySelector('.recipe-container');
    recipeContainer.innerHTML = ''; // Clear previous recipes

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe'); // Add recipe class
        recipeDiv.innerHTML = `
            <div class="image">
                <img src="${recipe.image_file}">
            </div>
            <div class="info">
                <h2>${recipe.recipe_name}</h2>
                <p class="description">${recipe.description}</p>
            </div>
        `;
        recipeContainer.appendChild(recipeDiv);
    });
};



// 验证button是否够工作//
// document.querySelectorAll('.pagination-button').forEach(button => {
    // button.addEventListener('click', () => {
        // const pageNumber = parseInt(button.textContent);
        // fetchRecipesForPage(pageNumber);
    // });
// document.addEventListener("DOMContentLoaded", function() {
    // const buttons = document.querySelectorAll('.pagination-button'); // Use class selector for all buttons
    // buttons.forEach(button => {
        // button.addEventListener('click', () => {        
            // const pageNumber = parseInt(button.textContent); // Extract page number
            // if (pageNumber === 2) {
                // Fetch recipes only for page 2
                // fetchRecipesForPage(pageNumber);
            // }
            // console.log("Button clicked!");
            // Rest of your code
        // });
    // });
// });
    

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.pagination-button'); // Use class selector for all buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const pageNumber = parseInt(button.textContent);
            if (pageNumber >= 2){
                fetchRecipesForPage(pageNumber);
                console.log("Button clicked!");
            }            
        })
    })
})        
            
            
            
            
            
            
            // const div1 = document.querySelector('.container'); // Corrected selector
            // const input1 = document.createElement('input');
            // div1.appendChild(input1);
            // Rest of your code
        // });
    // });
// });
//可以工作

