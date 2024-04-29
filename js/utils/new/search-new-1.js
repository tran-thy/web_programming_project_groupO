document.addEventListener("DOMContentLoaded", function () {
  // Function to handle Enter key press on search input
  document.addEventListener("keydown", function (event) {
    const searchInput = document.getElementById("search-input");
    console.log(`Input is: ${searchInput.value}`);
    if (event.key === "Enter" && event.target.id === "search-input") {
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
    const searchInput = document.getElementById("search-input");
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

  // heyanwen add the format of recipe container:
  // .recipe-container {
  //     max-width: 1100px;
  //     margin: 20px auto;
  //     display: flex;
  //     flex-wrap: wrap;
  //     justify-content: space-between;
  //   }

  //   .recipe:hover {
  //     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  //   }

  //   .image {
  //     width: 100%;
  //     height: 77%;
  //     overflow: hidden;
  //   }
  // Function to display search results
  // Function to display search results
  const displaySearchResults = (searchResults) => {
    const searchResultsSection = document.getElementById(
      "search-results-section"
    );

    // Check if searchResultsSection is null
    if (!searchResultsSection) {
      console.error(
        "Error displaying search results: Search results section not found."
      );
      return;
    }

    // Hide other sections
    document.getElementById("highlighted-section").style.display = "none";
    document.getElementById("myCarousel").style.display = "none";
    document.getElementById("recommend-options-vnese").style.display = "none";
    document.getElementById("recommend-options-cnese").style.display = "none";

    // Clear previous search results
    searchResultsSection.innerHTML = "";

    // Create a container for the search results
    const resultsContainer = document.createElement("div");
    resultsContainer.classList.add("container");
    // Apply styles to resultsContainer
    resultsContainer.style.maxWidth = "1100px";
    resultsContainer.style.margin = "20px auto";
    resultsContainer.style.display = "flex";
    resultsContainer.style.flexWrap = "wrap";
    resultsContainer.style.justifyContent = "space-between";

    if (searchResults.length === 0) {
      // If no search results found, display a message
      const noResultsDiv = document.createElement("div");
      noResultsDiv.classList.add(
        "row",
        "justify-content-center",
        "text-center"
      ); // Center the message
      noResultsDiv.innerHTML =
        "<div class='col'><br><br><p class='h3 mb-0'>No results found. Please search for other dishes or refer to the suggested dishes below.</p><br><br></div>";

      // Append the "No results found" message to the results container
      resultsContainer.appendChild(noResultsDiv);
    } else {
      // Display search results in rows with 3 items per row
      let rowDiv;
      searchResults.forEach((result, index) => {
        if (index % 3 === 0) {
          // Create a new row for every 3rd item
          rowDiv = document.createElement("div");
          rowDiv.classList.add("row");
          // Apply styles to rowDiv
          rowDiv.style.width = "calc(33.33% - 20px)";
          rowDiv.style.marginBottom = "40px";
          rowDiv.style.backgroundColor = "#fff";
          rowDiv.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
          rowDiv.style.borderRadius = "8px";
          rowDiv.style.overflow = "hidden";
          rowDiv.style.height = "400px";
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
        // Style
        recipeLink.style.textDecoration = "none";

        const dishImageDiv = document.createElement("div");
        dishImageDiv.classList.add("image");
        dishImageDiv.innerHTML = `<img src="${result.dishimage}" alt="${result.dishname}">`;

        const infoDiv = document.createElement("div");
        infoDiv.classList.add("info");

        const recipeName = document.createElement("h2");
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
    }

    // Append the container (with either search results or message) to the search results section
    searchResultsSection.appendChild(resultsContainer);
    // Display search results section
    searchResultsSection.style.display = "block";
  };
});
