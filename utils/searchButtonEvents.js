// Function to handle click event on search symbol button
document.getElementById('search-options').addEventListener('click', function() {
    const searchBox = document.querySelector('.search-box');
    // Toggle the display of the search box
    searchBox.style.display = searchBox.style.display === 'none' ? 'flex' : 'none';
});

// Click event to the document for handling search button click
document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'search-button') {
        handleSearch();
    }
});

// Keypress event to the document for handling Enter key press on search input
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById("search-input");
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Clear the input field
    searchInput.value = '';

    // Check if search term is empty
    if (searchTerm === "") {
        // Display an alert or handle it in your preferred way
        alert("Please enter a dish name to search.");
        return;
    }

    // Fetch data from the Vietnamese and Chinese JSON files
    Promise.all([
        fetch('data/vietnamese_recipes.json').then(response => response.json()),
        fetch('data/chinese_recipes.json').then(response => response.json())
    ]).then(data => {
        // Combine data from both files
        const allRecipes = data[0].concat(data[1]);
        // Perform search and display results
        performSearch(allRecipes, searchTerm);
    }).catch(error => {
        console.error('Error fetching data:', error);
    });
}

// Function to perform search by dish name
function searchByName(data, searchTerm) {
    return data.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));
}

// Function to perform search by ingredients
function searchByIngredients(data, searchTerm) {
    return data.filter(recipe => {
        return (recipe.recipe && recipe.recipe.ingredients && recipe.recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm)));
    });
}

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById("search-input");
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Clear the input field
    searchInput.value = '';

    // Check if search term is empty
    if (searchTerm === "") {
        // Display an alert or handle it in your preferred way
        alert("Please enter a dish name to search.");
        return;
    }

    // Fetch data from the Vietnamese and Chinese JSON files
    Promise.all([
        fetch('data/vietnamese_recipes.json').then(response => response.json()),
        fetch('data/chinese_recipes.json').then(response => response.json())
    ]).then(data => {
        // Combine data from both files
        const allRecipes = data[0].concat(data[1]);
        // Perform search and display results
        const searchResultsByName = searchByName(allRecipes, searchTerm);
        const searchResultsByIngredients = searchByIngredients(allRecipes, searchTerm);

        const searchResults = [...searchResultsByName, ...searchResultsByIngredients];

        // Hide the section
        document.getElementById('recommend-options').style.display = 'none';

        // Clear previous search results
        const displayResults = document.querySelector(".feast-category-index");
        displayResults.innerHTML = '';

        // Create a set to store unique results
        const uniqueResults = new Set();

        // Display search results
        searchResults.forEach(function(result) {
            // Check if the result is unique before adding it to the set
            if (!uniqueResults.has(result.name.toLowerCase())) {
                const listItem = document.createElement('li');
                listItem.classList.add('listing-item', 'col-md-6');
                const link = document.createElement('a');
                link.href = ''; // Replace with the actual link for each search result
                const image = document.createElement('img');
                image.src = result.image;
                image.alt = result.name;
                image.style.width = '50%';
                const title = document.createElement('div');
                title.classList.add('fsri-title');
                title.textContent = result.name;
                link.appendChild(image);
                link.appendChild(title);
                listItem.appendChild(link);
                displayResults.appendChild(listItem);

                // Add the result to the set to mark it as seen
                uniqueResults.add(result.name.toLowerCase());
            }
        });

        // If no unique search results found, display a message or handle it
        if (uniqueResults.size === 0) {
            displayResults.innerHTML = '<p>No results found.</p>';
        }
    }).catch(error => {
        console.error('Error fetching data:', error);
    });
}