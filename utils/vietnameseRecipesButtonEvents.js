// Function to handle click event for the "Vietnamese Recipes" button
function handleVietnameseRecipesButtonClick() {
  console.log("Vietnamese Recipes button clicked!");

  // Fetch Vietnamese recipes data from the server
  fetch("../data/vietnamese_recipes.json")

    .then(response => response.json())
    .then(data => {
      // Display Vietnamese recipes on the webpage
      displayVietnameseRecipes(data);
    })
    .catch(error => console.error("Error fetching Vietnamese recipes:", error));
}

// Function to display Vietnamese recipes on the webpage
function displayVietnameseRecipes(recipes) {
  const contentContainer = document.getElementById("content-container");
  contentContainer.innerHTML = ""; // Clear previous content

  let row;
  recipes.forEach((recipe, index) => {
    // Create a new row for every 3 recipes
    if (index % 3 === 0) {
      row = document.createElement("div");
      row.classList.add("row");
      contentContainer.appendChild(row);
    }

    // Create a column for each recipe
    const col = document.createElement("div");
    col.classList.add("col-md-4", "mb-4");

    const recipeElement = document.createElement("div");
    recipeElement.classList.add("recipe");

    const recipeName = document.createElement("h3");
    recipeName.textContent = recipe.name;

    const recipeImage = document.createElement("img");
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.name;

    const recipeDescription = document.createElement("p");
    recipeDescription.textContent = recipe.description;

    recipeElement.appendChild(recipeName);
    recipeElement.appendChild(recipeImage);
    recipeElement.appendChild(recipeDescription);

    col.appendChild(recipeElement);
    row.appendChild(col);
  });
}

// Get the Vietnamese Recipes button and attach event listener
const vietnameseRecipesButton = document.getElementById("vi-recipes");
vietnameseRecipesButton.addEventListener("click", handleVietnameseRecipesButtonClick);
