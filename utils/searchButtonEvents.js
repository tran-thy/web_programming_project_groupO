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

// Function to perform search
function performSearch(data, searchTerm) {
    // Filter the data based on the search term
    const searchResults = data.filter(recipe => {
        // Check if the recipe name or any ingredient includes the search term
        return recipe.name.toLowerCase().includes(searchTerm) || recipe.recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm));
    });

    // Hide the section
    document.getElementById('recommend-options').style.display = 'none';

    // Clear previous search results
    const displayResults = document.querySelector(".feast-category-index");
    displayResults.innerHTML = '';

    // Display search results
    if (searchResults.length > 0) {
        searchResults.forEach(function(result) {
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
        });
    } else {
        // If no search results found, display a message or handle it
        displayResults.innerHTML = '<p>No results found.</p>';
    }
}