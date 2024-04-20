//cozy food
const BACKEND_ROOT_URL = "http://localhost:3001";

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BACKEND_ROOT_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};

//Function to render Vietnamese dish
const renderVietnameseDish = async (id) => {
  try {
    const vietnameseDishData = await fetchData(`Vietnamese_Recipes/${id}`);
    displayDish(vietnameseDishData);
  } catch (error) {
    alert(error.message);
  }
};

//Function to display dish
const displayDish = (dish) => {
  const dishImageElement = document.getElementById("img-vn-cozy");
  dishImageElement.src = dish.dishimage;
  const dishNameElement = document.getElementById("category-title");
  dishNameElement.textContent = dish.dishname;
};
renderVietnameseDish("VN-0016");

// const renderVietnameseRandom = async () => {
//   try {
//     const vietnameseDishRandom = await fetchData(`randomFood`);
//     displayDishRandom(vietnameseDishRandom);
//   } catch (error) {
//     alert(error.message);
//   }
// };

// const displayDishRandom = (dish) => {
//   const dishImageRandom1 = document.getElementById("randome-img-1");
//   dishImageRandom1.src = dish.dishimage; // Assuming the property name is 'image'
//   const dishNameRandom1 = document.getElementById("randome-title-1");
//   dishNameRandom1.textContent = dish.dishname;
// };

const renderRandomRecipes = async () => {
  try {
    // Loop to fetch four random recipes one by one
    for (let index = 1; index <= 4; index++) {
      const recipe = await fetchData("randomFood");
      const recipeImgElement = document.getElementById(`recipe-img-${index}`);
      const recipeTitleElement = document.getElementById(
        `recipe-title-${index}`
      );
      const recipeLinkElement = document.getElementById(`recipe-link-${index}`);

      recipeImgElement.src = recipe.dishimage;
      recipeTitleElement.textContent = recipe.dishname;

      // Set the href attribute of the link to the detail page with the dishid as a query parameter
      recipeLinkElement.href = `vietnamese_detail_recipe.html?id=${recipe.dishid}`;
    }
  } catch (error) {
    console.error("Error rendering random recipes:", error);
    // Handle error
  }
};

renderRandomRecipes();
