// Function to handle click event on search symbol button
document.getElementById('search-button-icon').addEventListener('click', function() {
    const searchBox = document.querySelector('.search-box');
    // Toggle the display of the search box
    searchBox.style.display = searchBox.style.display === 'none' ? 'flex' : 'none';
});

// Function to handle search button click
document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'search-button') {
        handleSearch();
    }
});

// Function to handle Enter key press on search input
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && document.activeElement.id === 'search-input') {
        handleSearch();
    }
});

// Function to search recipes by name or ingredients
function searchRecipes(recipes, searchTerm) {
    searchTerm = searchTerm.toLowerCase().trim();
    return recipes.filter(recipe => {
        // Check if recipe name or any ingredient contains the search term
        return recipe.dishname.toLowerCase().includes(searchTerm) ||
            (recipe.recipeingredients && recipe.recipeingredients.toLowerCase().includes(searchTerm));
    });
}

// Function to fetch all recipes from the server
async function getAllRecipes() {
    try {
        const response = await fetch('http://localhost:3001/all'); // Update the endpoint URL if needed
        if (!response.ok) {
            throw new Error('Failed to fetch recipes');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching recipes: ${error.message}`);
    }
}

// Function to handle search
async function handleSearch() {
    const searchInput = document.getElementById("search-input");
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Clear the input field
    searchInput.value = '';

    // Check if search term is empty
    if (!searchTerm) {
        // Display an alert
        alert("Please enter a dish name or ingredient to search.");
        return;
    }

    try {
        // Fetch all recipes from the backend server
        console.log("Fetching all recipes...");
        const allRecipesData = await getAllRecipes();
        console.log("All recipes data:", allRecipesData);

        // Perform search locally on the client side
        const searchResults = searchRecipes(allRecipesData, searchTerm);
        console.log("Search results:", searchResults);

        // Display search results section
        displaySearchResults(searchResults);
    } catch (error) {
        console.error('Error handling search:', error);
    }
}

// Function to display search results
// Function to display search results
const displaySearchResults = (searchResults) => {
    console.log(`Check if the displaySearchResults run`);

    const searchResultsSection = document.getElementById('search-results-section');

    // Check if searchResultsSection is null
    if (!searchResultsSection) {
        console.error('Error displaying search results: Search results section not found.');
        return;
    }

    // Clear previous search results
    searchResultsSection.innerHTML = '';

    if (searchResults.length === 0) {
        // If no search results found, display a message
        searchResultsSection.innerHTML = '<p>No results found.</p>';
    } else {
        // Display search results
        searchResults.forEach(result => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');

            const recipeLink = document.createElement('a');
            recipeLink.href = `vietnamese_detail_recipe.html?id=${result.dishid}`;

            const dishImageDiv = document.createElement('div');
            dishImageDiv.classList.add('image');
            // Dynamically display dish image here (if available from server)
            dishImageDiv.innerHTML = `<img src="${result.dishimage}" alt="${result.dishname}">`;

            const infoDiv = document.createElement('div');
            infoDiv.classList.add('info');

            const recipeName = document.createElement('h2');
            recipeName.classList.add('recipe-name');
            recipeName.textContent = result.dishname;

            const description = document.createElement('p');
            description.classList.add('description');
            description.textContent = result.dishdescription;

            infoDiv.appendChild(recipeName);
            infoDiv.appendChild(description);

            recipeLink.appendChild(dishImageDiv);
            recipeLink.appendChild(infoDiv);

            recipeDiv.appendChild(recipeLink);

            searchResultsSection.appendChild(recipeDiv);
        });
    }

    // Display search results section
    searchResultsSection.style.display = 'block';
};