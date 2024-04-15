const BACKEND_ROOT_URL = 'http://localhost:3001';

// Function to fetch recipes for a specific page
const fetchRecipesForPage = async (page) => {
    try {
        const response = await fetch(`${BACKEND_ROOT_URL}/recipes?page=${page}`);
        if (!response.ok) {
            throw new Error('Failed to fetch recipes');
        }
        const recipes = await response.json();
        displayRecipes(recipes);
    } catch (error) {
        console.error("Error fetching recipes:", error.message);
        alert("Error fetching recipes. Please try again later.");
    }
};

// Function to display recipes on the frontend
const displayRecipes = (recipes) => {
    const recipeContainer1 = document.querySelector('.recipe-container');
    recipeContainer1.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
        <a href="${recipe.detail_html}">
            <div class="image">
                <img src="${recipe.image_file}">
            </div>
            <div class="info">
                <h2>${recipe.recipe_name}</h2>
                <p class="description">${recipe.description}</p>
            </div>
        </a>
        `;
        recipeContainer1.appendChild(recipeDiv);
    });
};
// mock data Function to fetch recipes based on a search query
// const fetchRecipesForSearch = async (query) => {
    // try {
        // Mock data (replace this with your actual mock data)
        // const mockData = [
            // // { recipe_id: '4', recipe_name: 'Fried Rice', description: 'rice fried with meat', image_file: 'mock_image1.jpg' },
            // // { recipe_id: '7', recipe_name: 'Stir Fried Beef With Rice Noodles', description: 'stir-fried beef with rice noodles', image_file: 'mock_image2.jpg' },
            // // { recipe_id: '9', recipe_name: 'Bit Plate Chicken', description: 'stir-fried beef with Pork noodles', image_file: '/css/spicy_kung_pao_chicken.jpg' }
        // ];
// 
        // Filter mock data based on search query
        // const filteredData = mockData.filter(recipe => {
            // return recipe.recipe_name.toLowerCase().includes(query.toLowerCase());
        // });
// 
        // Simulate a delay to mimic network latency (optional)
        // await new Promise(resolve => setTimeout(resolve, 1000));
// 
        // Use filtered mock data instead of making a real API call
        // searchdisplayRecipes(filteredData);
    // } catch (error) {
        // console.error("Error fetching search results:", error.message);
        // alert("Error fetching search results. Please try again later.");
    // }
// };
const fetchRecipesForSearch = async (query) => {
    try {
        const response = await fetch(`${BACKEND_ROOT_URL}/search?query=${query}`);
        if (!response.ok) {
            throw new Error('Failed to fetch search results');
        }
        const searchResults = await response.json();
        searchdisplayRecipes(searchResults.results);
    } catch (error) {
        console.error("Error fetching search results:", error.message);
        alert("Error fetching search results. Please try again later.");
    }
};


// const fetchRecipesForSearch = async (query) => {
    // try {
        // const response = await fetch(`${BACKEND_ROOT_URL}/search?query=${query}`);
        // if (!response.ok) {
            // throw new Error('Failed to fetch search results');
        // }
        // const searchResults = await response.json();
        // searchdisplayRecipes(searchResults.results); // Call the function to display search results
    // } catch (error) {
        // console.error("Error fetching search results:", error.message);
        // alert("Error fetching search results. Please try again later.");
    // }
// };
// 

// Function to display search results on the frontend
const searchdisplayRecipes = (search_recipes) => {
    const recipeContainer2 = document.querySelector('.recipe-container');
    recipeContainer2.innerHTML = ''; // Clear previous recipes

    search_recipes.forEach(recipe => {
        const search_recipeDiv = document.createElement('div');
        search_recipeDiv.classList.add('recipe'); // Add recipe class
        search_recipeDiv.innerHTML = `
        <a href="${recipe.detail_html}">
            <div class="image">
                <img src="${recipe.image_file}">
            </div>
            <div class="info">
                <h2>${recipe.recipe_name}</h2>
                <p class="description">${recipe.description}</p>
            </div>
        </a>
        `;
        recipeContainer2.appendChild(search_recipeDiv);
    });
};

document.addEventListener("DOMContentLoaded", function() {
    // Event listener for pagination buttons
    const buttons = document.querySelectorAll('.pagination-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const pageNumber = parseInt(button.textContent);
            fetchRecipesForPage(pageNumber);
        });
    });
})
    // Event listener for search button
document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.querySelector('.search-box');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const searchQuery = document.querySelector('.search-chinese-recipe-form-input').value.trim();
        if (searchQuery !== '') {
            fetchRecipesForSearch(searchQuery);
        } else {
            alert("Please enter a search query.");
        }
    })
})
// navigate to the homepage by clicking the home button
document.addEventListener("DOMContentLoaded", function() {
    // Event listener for pagination buttons
    const navhomeButton = document.querySelector('.nav-link-home');
    
    navhomeButton.addEventListener('click', navtoHome)

    function navtoHome() {
        window.location.href = 'index.html';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Event listener for pagination buttons
    const navhomeButton = document.querySelector('.nav-link-vietnamese');
    
    navhomeButton.addEventListener('click', navtoHome)

    function navtoHome() {
        window.location.href = 'vietnamese_recipes.html';
    }
});
        