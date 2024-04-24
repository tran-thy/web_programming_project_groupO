document.addEventListener("DOMContentLoaded", function() {
    // Function to handle click event on search symbol button
    document
        .getElementById("search-button-icon-about")
        .addEventListener("click", function() {
            const searchBox = document.querySelector(".search-box-about");
            const searchInput = document.getElementById("search-input-about");

            // Toggle the display of the search box
            searchBox.style.display =
                searchBox.style.display === "none" ? "flex" : "none";

            // Focus on the search input field when the search box is displayed
            if (searchBox.style.display === "flex") {
                searchInput.focus();
            }
        });

    // Function to handle search button click
    document.addEventListener("click", function(event) {
        if (event.target && event.target.id === "search-button-icon-about") {
            handleSearch();
        }
    });

    // Function to handle Enter key press on search input
    document.addEventListener("keypress", function(event) {
        const searchInput = document.getElementById("search-input-about");
        if (event.key === "Enter" && document.activeElement === searchInput) {
            handleSearch();
        }
    });

    // Function to search recipes by name or ingredients
    function searchRecipes(recipes, searchTerm) {
        searchTerm = searchTerm.toLowerCase().trim();
        return recipes.filter((recipe) => {
            // Check if recipe name or any ingredient contains the search term
            return (
                recipe.dishname.toLowerCase().includes(searchTerm) ||
                (recipe.recipeingredients &&
                    recipe.recipeingredients.toLowerCase().includes(searchTerm))
            );
        });
    }

    // Function to fetch all recipes from the server
    async function getAllRecipes() {
        try {
            const response = await fetch("http://localhost:3001/all"); // Update the endpoint URL if needed
            if (!response.ok) {
                throw new Error("Failed to fetch recipes");
            }
            return await response.json();
        } catch (error) {
            throw new Error(`Error fetching recipes: ${error.message}`);
        }
    }

    // Function to handle search
    async function handleSearch() {
        console.log(`function handleSearch runs`);
        const searchInput = document.getElementById("search-input-about");
        const searchTerm = searchInput.value.trim().toLowerCase();

        // Clear the input field
        searchInput.value = "";

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
            console.error("Error handling search:", error);
        }
    }

    // Function to handle click event on recipe name links
    const attachRecipeDetailEventListeners = () => {
        // Get all recipe name elements
        const eachRecipes = document.querySelectorAll('.recipe-name');
        // Add event listener to each recipe name link
        eachRecipes.forEach(function(eachRecipe) {
            eachRecipe.addEventListener('click', function(event) {
                // Prevent default link behavior
                event.preventDefault();

                // Navigate to the correct recipe detail page based on dish ID
                const dishid = eachRecipe.getAttribute('data-recipe-id');
                const isChineseDish = dishid.startsWith("CH");

                if (isChineseDish) {
                    // For Chinese dishes, navigate to recipe_detail_new.html
                    window.location.href = `recipe_detail_search.html?dishid=${dishid}`;
                } else if (dishid.startsWith("VN")) {
                    // For Vietnamese dishes, navigate to vietnamese_detail_recipe.html
                    window.location.href = `vietnamese_detail_recipe.html?id=${dishid}`;
                } else {
                    // Handle other cases
                    console.error("Invalid dish ID:", dishid);
                    alert("Invalid dish ID. Please try again.");
                }
            });
        });
    };

    // Call the function to attach event listeners when the DOM is loaded
    document.addEventListener("DOMContentLoaded", function() {
        attachRecipeDetailEventListeners();
    });

    // Function to display search results
    const displaySearchResults = (searchResults) => {
        const searchResultsSection = document.getElementById(
            "search-results-section-about"
        );

        // Check if searchResultsSection is null
        if (!searchResultsSection) {
            console.error(
                "Error displaying search results: Search results section not found."
            );
            return;
        }

        // Hide other sections
        document.getElementById("about-us-section").style.display = "none";
        document.getElementById("recommend-options-vnese").style.display = "none";
        document.getElementById("recommend-options-cnese").style.display = "none";

        // Clear previous search results
        searchResultsSection.innerHTML = "";

        if (searchResults.length === 0) {
            // If no search results found, display a message
            searchResultsSection.innerHTML = "<p>No results found.</p>";
        } else {
            // Create a container for the search results//H
            const resultsContainer = document.createElement("div");
            resultsContainer.classList.add("container");
            // Display search results in rows with 3 items per row
            let rowDiv;
            searchResults.forEach((result, index) => {
                if (index % 3 === 0) {
                    // Create a new row for every 3rd item
                    rowDiv = document.createElement("div");
                    rowDiv.classList.add("row");
                    //container appendchild //H
                    resultsContainer.appendChild(rowDiv);
                }

                const recipeDiv = document.createElement("div");
                recipeDiv.classList.add("col-md-4"); // Bootstrap column class for 3 items per row

                const recipeLink = document.createElement("a");
                // Check the dish ID prefix and set the appropriate link
                if (result.dishid.startsWith("VN")) {
                    recipeLink.href = `vietnamese_detail_recipe.html?id=${result.dishid}`;
                } else if (result.dishid.startsWith("CH")) {
                    recipeLink.href = `recipe_detail_search.html?id=${result.dishid}`;
                }
                //style
                recipeLink.style.textDecoration = "none";


                const dishImageDiv = document.createElement("div");
                dishImageDiv.classList.add("image");
                dishImageDiv.innerHTML = `<img src="${result.dishimage}" alt="${result.dishname}">`;

                const infoDiv = document.createElement("div");
                infoDiv.classList.add("info");

                const recipeName = document.createElement("h2");
                recipeName.classList.add("recipe-name");
                recipeName.textContent = result.dishname;
                //style //H
                recipeName.style.color = "black";

                infoDiv.appendChild(recipeName);

                recipeLink.appendChild(dishImageDiv);
                recipeLink.appendChild(infoDiv);

                recipeDiv.appendChild(recipeLink);

                rowDiv.appendChild(recipeDiv);
                //container appendchild //H
                searchResultsSection.appendChild(resultsContainer);
            });
        }

        // Display search results section
        searchResultsSection.style.display = "block";
    };
});