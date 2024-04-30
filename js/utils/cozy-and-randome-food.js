//cozy food vnese
//const BACKEND_ROOT_URL = "http://localhost:3001";

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
renderVietnameseDish("VN-0010");

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
  const recipesContainer = document.getElementById("recommend-options-vnese");
  recipesContainer.innerHTML = `
    <h2 class="block-heading has-text-align-center">
      <strong>Recommendation Vietnamese Recipes</strong>
    </h2>
  `;

  recipes.forEach((recipe, index) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipes-wrapper");
  
    recipeDiv.innerHTML = `
      <a href="vietnamese_detail_recipe.html?id=${recipe.dishid}" class="img-link">
        <div class="container row justify-content-center" id="recipes-container-vn" style="margin-top: 85px;">
          <div class="col-md-3 greatest-post-one text-center">
            <div class="greatest-img">
              <img style="width: 320px; height: 280px; object-fit: cover;" src="${recipe.dishimage}" alt="Image" class="img-fluid" />
            </div>
            <div class="img-name">${recipe.dishname}</div>
          </div>
        </div>
      </a>
    `;
    recipesContainer.appendChild(recipeDiv);

    if (index === 0 || index === 1) {
      const markDiv = document.createElement("div");
      markDiv.classList.add("mark");
      markDiv.innerHTML = `
        <img style="width: 100px; height: auto;" src="chinese_images/Vietnamese_mark.png" alt="Mark" class="img-fluid" />
      `;
      recipesContainer.appendChild(markDiv);
    }
  });
};

fetchRandomRecipes();