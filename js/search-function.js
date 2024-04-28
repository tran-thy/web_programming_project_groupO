// search fecth function
const fetchRecipesForSearch = async (query, page) => {
    try {
        const response = await fetch(`${BACKEND_ROOT_URL}/search?query=${query}&page=${page}`);
        if (!response.ok) {
            throw new Error('Failed to fetch search results');
        }
        const searchResults = await response.json();
        searchdisplayRecipes(searchResults.results);
        const postContainer = document.querySelector('.post-container');
        postContainer.style.display = 'none';
    } catch (error) {
        console.error("Error fetching search results:", error.message);
        alert("Error fetching search results. Please try again later.");
    }
};

// Function to display search results on the frontend
const searchdisplayRecipes = (search_recipes) => {
    const recipeContainer2 = document.querySelector('.recipe-container');
    recipeContainer2.innerHTML = ''; // Clear previous recipes

    // const postrecipeForm = document.querySelector('.post-container')
    // postrecipeForm.innerHTML='';// clear privious post recipe form

    search_recipes.forEach(recipe => {
        const search_recipeDiv = document.createElement('div');
        search_recipeDiv.classList.add('recipe'); // Add recipe class
        search_recipeDiv.innerHTML = `
            <div class="image">
                <img src="${recipe.dishimage}">
            </div>
            <div class="info">
                <h2 class="recipe-name" data-recipe-id="${recipe.dishid}">${recipe.dishname}
                <p class="description">${recipe.dishdescription}</p>
            </div>
        `;
        recipeContainer2.appendChild(search_recipeDiv);
    });
    // Attach event listeners to recipe names again  ***********important
    const postContainer = document.querySelector('.post-container');
    postContainer.innerHTML = '';
    attachRecipeDetailEventListeners();
    // Clear post-container
    

};

document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.querySelector('.search-box');
    const paginationbutton = document.querySelector('.pagination-container');
    // const postrecipeForm = document.querySelector('.post-container')
    // buttons.style.display = 'none';
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const searchQuery = document.querySelector('.search-chinese-recipe-form-input').
        value.trim();
        
        if (searchQuery !== '') {            
            fetchRecipesForSearch(searchQuery, 'home');
            paginationbutton.style.display = 'none';
            // postrecipeForm.style.display = 'none';


        } else {
            paginationbutton.style.display = 'block';
            // postrecipeForm.style.display = 'block';
            alert("Please enter a search query.");
        }
    });
});

const attachRecipeDetailEventListeners = () => {
    // Get all recipe name elements
    const eachRecipes = document.querySelectorAll('.recipe-name');
    // Add event listener to each recipe name link
    eachRecipes.forEach(function(eachRecipe) {
        eachRecipe.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();      
                        
            // Navigate to the recipe detail page
            const dishid = eachRecipe.getAttribute('data-recipe-id'); 
            window.location.href = `recipe_detail.html?dishid=${dishid}`;
        });
    });
};

document.addEventListener("DOMContentLoaded", function() {
    attachRecipeDetailEventListeners();
});