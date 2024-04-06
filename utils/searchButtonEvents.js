// Function to handle click event on search symbol button
document.getElementById('search-button-icon').addEventListener('click', function() {
    const searchBox = document.querySelector('.search-box');
    // Toggle the display of the search box
    searchBox.style.display = searchBox.style.display === 'none' ? 'flex' : 'none';
});

// Function to handle search button click
document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'find-button') {
        handleSearch();
    }
});

// Function to handle Enter key press on search input
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

// Function to fetch recipes from JSON files
async function fetchRecipes() {
    try {
        const chineseRecipesResponse = await fetch('data/chinese_recipes.json');
        const vietnameseRecipesResponse = await fetch('data/vietnamese_recipes.json');

        const chineseRecipes = await chineseRecipesResponse.json();
        const vietnameseRecipes = await vietnameseRecipesResponse.json();

        return [...chineseRecipes, ...vietnameseRecipes];
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
}

// Function to search recipes by name or ingredients
function searchRecipes(recipes, searchTerm) {
    searchTerm = searchTerm.toLowerCase().trim();
    return recipes.filter(recipe => {
        // Check if recipe name or any ingredient contains the search term
        return recipe.name.toLowerCase().includes(searchTerm) ||
            (recipe.recipe && recipe.recipe.ingredients && recipe.recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm)));
    });
}

// Function to handle search
async function handleSearch() {
    const searchInput = document.getElementById("search-input");
    const searchTerm = searchInput.value;

    // Clear the input field
    searchInput.value = '';

    // Check if search term is empty
    if (!searchTerm.trim()) {
        // Display an alert or handle it in your preferred way
        alert("Please enter a dish name or ingredient to search.");
        return;
    }

    try {
        // Fetch recipes from JSON files
        const recipes = await fetchRecipes();

        // Perform search and display results
        const searchResults = searchRecipes(recipes, searchTerm);

        // Display search results section
        displaySearchResults(searchResults);
    } catch (error) {
        console.error('Error handling search:', error);
    }
}

// Function to display search results
function displaySearchResults(searchResults) {
    const searchResultsSection = document.getElementById('search-results-section');
    const displayResults = document.getElementById('search-results');

    // Clear previous search results
    displayResults.innerHTML = '';

    // Hide the section
    document.getElementById('highlighted-section').style.display = 'none';

    if (searchResults.length === 0) {
        // If no search results found, display a message
        displayResults.innerHTML = '<p>No results found.</p>';
    } else {
        // Display search results
        let row = document.createElement('div');
        row.classList.add('row', 'category-list');

        searchResults.forEach((result, index) => {
            if (index > 0 && index % 2 === 0) {
                // Create a new row after every two results
                displayResults.appendChild(row);
                row = document.createElement('div');
                row.classList.add('row', 'category-list');
            }

            const listItem = document.createElement('div');
            listItem.classList.add('col-md-6', 'listing-item');

            const link = document.createElement('a');
            link.href = ''; // Replace with the actual link for each search result

            const image = document.createElement('img');
            image.classList.add('equal-img');
            image.src = result.image;
            image.alt = result.name;

            const title = document.createElement('div');
            title.classList.add('category-title');
            title.textContent = result.name;

            link.appendChild(image);
            link.appendChild(title);
            listItem.appendChild(link);

            const buttonsContainer = document.createElement('div');
            buttonsContainer.classList.add('category-buttons');

            const button = document.createElement('a');
            button.classList.add('category-btn', 'btn', 'btn-primary');
            button.href = ''; // Replace with the actual link for each search result

            const strong = document.createElement('strong');
            strong.classList.add('category-more-detail');
            strong.textContent = 'Explore More Recipes >';

            button.appendChild(strong);
            buttonsContainer.appendChild(button);
            listItem.appendChild(buttonsContainer);

            row.appendChild(listItem);
        });

        // Append the last row if it contains less than 2 items
        displayResults.appendChild(row);
    }

    // Display search results section
    searchResultsSection.style.display = 'block';
}