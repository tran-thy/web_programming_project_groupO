// Base URL for dish details page
const EACH_RECIPE_DETAIL_BASE_URL = "_each-recipe-detail.html";

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
    if (event.key === 'Enter') {
        handleSearch();
    }
});

// Function to search recipes by name or ingredients
// Function to search recipes by name or ingredients
function searchRecipes(recipes, searchTerm) {
    searchTerm = searchTerm.toLowerCase().trim();
    return recipes.filter(recipe => {
        // Check if recipe name or any ingredient contains the search term
        return recipe.dishname.toLowerCase().includes(searchTerm) ||
            (recipe.recipeIngredients && recipe.recipeIngredients.toLowerCase().includes(searchTerm));
    });
}

// Function to check if the dish ID corresponds to a Vietnamese dish
function isVietnameseDish(dishId) {
    return dishId.toLowerCase().startsWith('vn-');
}

// Function to check if the dish ID corresponds to a Chinese dish
function isChineseDish(dishId) {
    return dishId.toLowerCase().startsWith('ch-');
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

        // Combine Vietnamese and Chinese recipes into a single array
        const allRecipes = allRecipesData.reduce((accumulator, current) => {
            if (current.dishtype === "Vietnamese Dish") {
                current.dishid = `VN-${current.dishid}`; // Add prefix to dishid to identify Vietnamese dishes
            } else if (current.dishtype === "Chinese Dish") {
                current.dishid = `CH-${current.dishid}`; // Add prefix to dishid to identify Chinese dishes
            }
            accumulator.push(current);
            return accumulator;
        }, []);

        console.log("Combined recipes:", allRecipes);

        // Perform search locally on the client side
        const searchResults = searchRecipes(allRecipes, searchTerm);
        console.log("Search results:", searchResults);

        // Display search results section
        displaySearchResults(searchResults);
    } catch (error) {
        console.error('Error handling search:', error);
    }
}

// Function to display search results
const displaySearchResults = (searchResults, eachRecipeDetailsBaseUrl) => {
    const searchResultsSection = document.getElementById('search-results-section');
    const displayResults = document.getElementById('search-results');

    // Clear previous search results
    displayResults.innerHTML = '';

    // Hide the section
    document.getElementById('highlighted-section').style.display = 'none';
    document.getElementById('myCarousel').style.display = 'none';
    document.getElementById('about-us-section').style.display = 'none';
    document.getElementById('vn-recipe-display-section').style.display = 'none';

    if (searchResults.length === 0) {
        // If no search results found, display a message
        displayResults.innerHTML = '<p>No results found.</p>';
    } else {
        // Display search results
        let row = document.createElement('div');
        row.classList.add('row', 'category-list');

        searchResults.forEach((result, index) => {
            if (index > 0 && index % 3 === 0) {
                // Create a new row after every three results
                displayResults.appendChild(row);
                row = document.createElement('div');
                row.classList.add('row', 'category-list');
            }

            const listItem = document.createElement('div');
            listItem.classList.add('col-md-4', 'listing-item'); // Change to col-md-4

            const link = document.createElement('a');
            link.href = `${eachRecipeDetailsBaseUrl}?id=${result.id}`; // Constructing the dish details URL

            const image = document.createElement('img');
            image.classList.add('equal-img');
            image.src = result.dishimage; // Update to match data structure
            image.alt = result.dishname; // Update to match data structure

            const title = document.createElement('div');
            title.classList.add('category-title');
            title.textContent = result.dishname; // Update to match data structure

            link.appendChild(image);
            link.appendChild(title);
            listItem.appendChild(link);

            // Add a line break after the dish name
            listItem.appendChild(document.createElement('br'));
            listItem.appendChild(document.createElement('br'));

            row.appendChild(listItem);
        });

        // Append the last row if it contains less than 3 items
        displayResults.appendChild(row);
    }

    // Display search results section
    searchResultsSection.style.display = 'block';
};