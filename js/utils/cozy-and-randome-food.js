//cozy food vnese
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
  const dishNameElement = document.getElementById("category-title-vn");
  dishNameElement.textContent = dish.dishname;
};
renderVietnameseDish("VN-0016");

//cozy food cnese
const renderChineseDish = async (id) => {
  try {
    const chineseDishData = await fetchData(`detailrecipe/${id}`);
    displaychineseDish(chineseDishData);
  } catch (error) {
    alert(error.message);
  }
};

//Function to display dish
const displaychineseDish = (dish) => {
  const dishImageElement = document.getElementById("img-cn-cozy");
  dishImageElement.src = dish.dishimage;
  const dishNameElement = document.getElementById("category-title-cn");
  dishNameElement.textContent = dish.dishname;
};
renderChineseDish("CH-0020");

//Randome food vnese

const fetchRandomRecipes = async () => {
  try {
    const vietnameseDishRandom = await fetchData(`randomFood`);
    displayDishRandom(vietnameseDishRandom);
  } catch (error) {
    alert(error.message);
  }
};

const displayDishRandom = (recipes) => {
  const recipesContainer = document.getElementById("recipes-container");
  recipesContainer.innerHTML = "";
  recipes.forEach((recipe, index) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add(
      "col-md-3",
      "greatest-post-one",
      "has-text-align-center"
    );

    const recipeLink = document.createElement("a");
    recipeLink.href = `vietnamese_detail_recipe.html?id=${recipe.dishid}`;
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("greatest-img");

    const recipeImg = document.createElement("img");
    recipeImg.src = recipe.dishimage;

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("greatest-title");
    titleDiv.textContent = recipe.dishname;

    console.log("Title:", recipe.dishname); // Log the title

    imgDiv.appendChild(recipeImg);
    recipeLink.appendChild(imgDiv);
    recipeLink.appendChild(titleDiv);
    recipeDiv.appendChild(recipeLink);
    recipesContainer.appendChild(recipeDiv);
  });
};

fetchRandomRecipes();
