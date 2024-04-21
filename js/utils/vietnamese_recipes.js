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

  // Calculate number of rows needed
  const numRows = Math.ceil(dishesData.length / 3);

  for (let i = 0; i < numRows; i++) {
    // Create a new row
    const row = document.createElement("div");
    row.classList.add("row");

    // Add dishes to the row
    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      if (index >= dishesData.length) break;

      const dish = dishesData[index];

      // Create dish element
      const dishElement = document.createElement("div");
      dishElement.classList.add("col");

      const dishLink = document.createElement("a");
      dishLink.href = `vietnamese_detail_recipe.html?id=${dish.dishid}`;

      const imageDiv = document.createElement("div");
      imageDiv.classList.add("image");

      const dishImage = document.createElement("img");
      dishImage.src = dish.dishimage;
      dishImage.alt = dish.dishname;

      imageDiv.appendChild(dishImage);

      const infoDiv = document.createElement("div");
      infoDiv.classList.add("info");

      const dishName = document.createElement("h4");
      dishName.classList.add("title-item");
      dishName.textContent = dish.dishname;

      infoDiv.appendChild(dishName);

      dishLink.appendChild(imageDiv);
      dishLink.appendChild(infoDiv);
      dishElement.appendChild(dishLink);
      row.appendChild(dishElement);
    }

  // Append the last row
  vietnameseRecipeSection.appendChild(row);

  vietnameseRecipeSection.style.display = "block";
};

renderVietnameseDishes();
