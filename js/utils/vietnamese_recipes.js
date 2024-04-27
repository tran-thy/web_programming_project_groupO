const BACKEND_ROOT_URL = "http://localhost:3001";

// Function to retrieve Vietnamese dishes data from the backend
const getVietnameseDishesData = async (startIndex, endIndex) => {
  try {
    const response = await fetch(`${BACKEND_ROOT_URL}/Vietnamese_Recipes`);
    const dishesData = await response.json();
    return dishesData.slice(startIndex, endIndex);
  } catch (error) {
    throw new Error(`Error retrieving Vietnamese dishesData: ${error.message}`);
  }
};

// Function to render Vietnamese dishes
const renderVietnameseDishes = async () => {
  try {
    const vietnameseDishesData = await getVietnameseDishesData(0, 6);
    let currentPage = 1;
    const pageSize = 6;
    const dishesData = await getVietnameseDishesData();
    totalRecipes = dishesData.length; // Update totalRecipes with the length of Vietnamese dishes data
    //   const totalRecipes = 16;
    const totalPages = Math.ceil(totalRecipes / pageSize); // This should give 3  pages
    console.log(totalPages); // Check if this gives the expected result

    const renderDishesForPage = async (page) => {
      try {
        const startIndex = (page - 1) * pageSize;
        //   const endIndex = Math.min(startIndex + pageSize, totalRecipes);
        const endIndex = startIndex + pageSize;
        const dishesData = await getVietnameseDishesData(startIndex, endIndex);
        displayVietnameseDishes(dishesData);
      } catch (error) {
        alert(error.message);
      }
    };

    const updatePaginationControls = () => {
      document.getElementById(
        "currentPage"
      ).textContent = `Page ${currentPage}`;
    };

    document.getElementById("nextPage").addEventListener("click", async () => {
      currentPage++;
      if (currentPage > Math.ceil(totalPages)) {
        currentPage = Math.ceil(totalPages);
      }
      await renderDishesForPage(currentPage);
      updatePaginationControls();
    });

    document.getElementById("prevPage").addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderDishesForPage(currentPage);
        updatePaginationControls();
      }
    });

    renderDishesForPage(currentPage);
    updatePaginationControls();
  } catch (error) {
    alert(error.message);
  }
};
const displayVietnameseDishes = (dishesData) => {
  const vietnameseRecipeSection = document.getElementById("recipeGallery");
  if (!vietnameseRecipeSection) {
    throw new Error("Vietnamese recipe display section not found");
  }
  vietnameseRecipeSection.innerHTML = "";

  // Create a container for the recipes
  // const recipesContainer = document.createElement("div");
  // recipesContainer.classList.add("container-main");

  dishesData.forEach((dish) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
      <a href="vietnamese_detail_recipe.html?id=${dish.dishid}">
        <div class="image">
          <img src="${dish.dishimage}" alt="${dish.dishname}">
        </div>
        <div class="info">
          <h2 class="recipe-name" data-recipe-id="${dish.dishid}">${dish.dishname}</h2>
        </div>
      </a>
    `;
    // Append each recipe to the recipes container
    vietnameseRecipeSection.appendChild(recipeDiv);
  });

  // Append the recipes container to the recipe section
  // vietnameseRecipeSection.appendChild(recipesContainer);
};

renderVietnameseDishes();
