document.addEventListener("DOMContentLoaded", function() {
    // Function to handle Enter key press on search input
    document.addEventListener("keydown", function(event) {
        const searchInput = document.getElementById("search-input-about");
        console.log(`Input is: ${searchInput.value}`);
        if (event.key === "Enter" && event.target.id === "search-input-about") {
            event.preventDefault(); // Prevent default form submission
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
        console.log(`Handle search function is called`);
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
            const allRecipesData = await getAllRecipes();

            // Perform search locally on the client side
            const searchResults = searchRecipes(allRecipesData, searchTerm);

            // Display search results section
            displaySearchResults(searchResults);
        } catch (error) {
            console.error("Error handling search:", error);
        }
    }

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
        document.getElementById("recommend-options-vnese").style.display = "none";
        document.getElementById("recommend-options-cnese").style.display = "none";
        document.getElementById("about-us-section").style.display = "none";

        // Clear previous search results
        searchResultsSection.innerHTML = "";

        // Create a container for the search results
        const resultsContainer = document.createElement("div");
        resultsContainer.classList.add("container");

        // Check if there are no search results
        if (searchResults.length === 0) {
            // If no search results found, display a message within the same structure as the results
            const noResultsDiv = document.createElement("div");
            noResultsDiv.classList.add("container-fluid", "d-flex", "justify-content-center", "align-items-center", "vh-100");
            noResultsDiv.innerHTML = `
        <div class='col-md-6 text-center'>
            <br><br>
            <p class='h3 mb-0' style='font-weight: bold; font-size: 1.2rem; text-align: center;'>No results found. Please search for other dishes. Thank you!</p>
            <br><br>
        </div>`;

            // Append the noResultsDiv to the search results section
            searchResultsSection.innerHTML = ""; // Clear previous content
            searchResultsSection.appendChild(noResultsDiv);
            searchResultsSection.style.display = "block";

        } else {
            // Display search results in rows with 3 items per row
            let rowDiv = document.createElement("div");
            rowDiv.classList.add("row");
            rowDiv.style.cssText = `max-width: 1100px;
                margin: 20px auto;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;`;

            searchResults.forEach((result, index) => {
                const recipeDiv = document.createElement("div");
                recipeDiv.classList.add("col-md-4"); // Bootstrap column class for 3 items per row
                recipeDiv.style.cssText = `width: calc(33.33% - 20px);
                    margin-bottom: 40px;
                    background-color: #fff;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                    overflow: hidden;
                    height: 400px;`;

                const recipeLink = document.createElement("a");
                // Check the dish ID prefix and set the appropriate link
                if (result.dishid.startsWith("VN")) {
                    recipeLink.href = `vietnamese_detail_recipe.html?id=${result.dishid}`;
                } else if (result.dishid.startsWith("CH")) {
                    recipeLink.href = `recipe_detail_search.html?id=${result.dishid}`;
                }
                // Style
                recipeLink.style.textDecoration = "none";

                const dishImageDiv = document.createElement("div");
                dishImageDiv.classList.add("image");
                dishImageDiv.innerHTML = `<img 
                    style="width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: cover;
                    max-width: 100%;" 
                    src="${result.dishimage}" alt="${result.dishname}">`;
                dishImageDiv.style.cssText = `width: 100%;
                    height: 77%;
                    overflow: hidden;`;

                const infoDiv = document.createElement("div");
                infoDiv.classList.add("info");
                infoDiv.style.cssText = `padding: 10px;
                    text-align: center;
                    text-overflow: ellipsis`;
                const recipeName = document.createElement("h3");
                recipeName.classList.add("recipe-name");
                recipeName.textContent = result.dishname;
                // Style
                recipeName.style.color = "black";

                infoDiv.appendChild(recipeName);

                recipeLink.appendChild(dishImageDiv);
                recipeLink.appendChild(infoDiv);

                recipeDiv.appendChild(recipeLink);

                rowDiv.appendChild(recipeDiv);
            });

            // Append the last row if it's not empty // sear results.length ==2
            if (searchResults.length === 1 || searchResults.length === 2) {
                // If there's only one search result, create a new row and append it
                const singleRowDiv = document.createElement("div");
                singleRowDiv.classList.add("row-single");
                singleRowDiv.style.cssText = ` width:100%;
                    margin-left: auto;
                    margin-right: auto;
                    background-color: #fff;
                    border-radius: 8px;
                    overflow: hidden;
                    height: 400px;
                    //display:flex;
                    justify-content: center`;
                singleRowDiv.appendChild(rowDiv);
                resultsContainer.appendChild(singleRowDiv);
            } else if (rowDiv.childNodes.length > 0) {
                // If there are more than one search results, append the rowDiv directly
                resultsContainer.appendChild(rowDiv);
            }

            // Append the container (with either search results or message) to the search results section
            searchResultsSection.appendChild(resultsContainer);
            // Display search results section
            searchResultsSection.style.display = "block";
        }

        // Define the CSS rules within a media query
        const styleElement = document.createElement("style");
        const css = `
            @media screen and (max-width: 768px) {
                .col-md-4{
                    width: calc(100% - 80px) !important;
                    margin-left: auto;
                    margin-right: auto;
                }
                .row-single{
                    width: 100% !important;
                }
            }
        `;
        styleElement.textContent = css;
        document.head.appendChild(styleElement);
    };
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleNavBtn = document.getElementById('toggleNavBtn');
    const navLinks = document.querySelector('.nav-links');


    toggleNavBtn.addEventListener('click', function() {
        navLinks.classList.toggle('show'); 
    });
});
