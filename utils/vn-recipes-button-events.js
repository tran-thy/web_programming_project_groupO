const BACKEND_ROOT_URL = "http://localhost:3001";
let vietnameseRecipeSection; // Declare the variable for later assignment

// Function to retrieve Vietnamese dishes data from the backend
const getVietnameseDishesData = async () => {
  try {
    const response = await fetch(`${BACKEND_ROOT_URL}`);
    const dishesData = await response.json();
    return dishesData.filter((dish) => dish.dishtype === "Vietnamese Dish");
  } catch (error) {
    throw new Error(`Error retrieving Vietnamese dishesData: ${error.message}`);
  }
};

// Function to render Vietnamese dishes
<<<<<<< HEAD:utils/display-vietnamese-dishes.js
const renderVietnameseDishes = async () => {
  try {
    // Hide sections
    hideSections();
=======
const renderVietnameseDishes = async() => {
    try {
        // Hide sections
        hideSections();
>>>>>>> dff2cbfe20f0b2200a1ab5e06961d695e8f1c1b1:utils/vn-recipes-button-events.js

    const vietnameseDishesData = await getVietnameseDishesData();
    displayVietnameseDishes(vietnameseDishesData);
  } catch (error) {
    alert(error.message);
  }
};

// Function to display Vietnamese dishes
const displayVietnameseDishes = (dishesData) => {
  // Ensure vietnameseRecipeSection is defined
  vietnameseRecipeSection = document.getElementById(
    "vn-recipe-display-section"
  );
  if (!vietnameseRecipeSection) {
    throw new Error("Vietnamese recipe display section not found");
  }

  // Clear previous content
  vietnameseRecipeSection.innerHTML = "";

  // Display each Vietnamese dish
  dishesData.forEach((dish) => {
    const dishElement = document.createElement("div");
    dishElement.classList.add("dish");

    // Create elements for dish details
    const dishName = document.createElement("h3");
    dishName.textContent = dish.dishname;
    const dishDescription = document.createElement("p");
    dishDescription.textContent = dish.dishdescription;
    const dishImage = document.createElement("img");
    dishImage.src = dish.dishimage;
    dishImage.alt = dish.dishname;

    // Append dish details to dish element
    dishElement.appendChild(dishName);
    dishElement.appendChild(dishDescription);
    dishElement.appendChild(dishImage);

    // Append dish element to Vietnamese recipe section
    vietnameseRecipeSection.appendChild(dishElement);
  });

  // Display the section
  vietnameseRecipeSection.style.display = "block";
};

// Event listener for Vietnamese recipes button in navigation
<<<<<<< HEAD:utils/display-vietnamese-dishes.js
document.addEventListener("DOMContentLoaded", () => {
  const vietnameseRecipesBtn = document.getElementById(
    "vietnamese-recipes-btn"
  );
  if (!vietnameseRecipesBtn) {
    throw new Error("Vietnamese recipes button not found");
  }

  vietnameseRecipesBtn.addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent default button behavior
    await renderVietnameseDishes(); // Fetch and render Vietnamese dishes
  });
});

// Event listener for Vietnamese recipes button in footer
document.addEventListener("DOMContentLoaded", () => {
  const vietnameseRecipesBtnFooter = document.getElementById(
    "vietnamese-recipes-btn-footer"
  );
  if (!vietnameseRecipesBtnFooter) {
    throw new Error("Vietnamese recipes button in footer not found");
  }

  vietnameseRecipesBtnFooter.addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent default button behavior
    await renderVietnameseDishes(); // Fetch and render Vietnamese dishes
  });
=======
document.addEventListener('DOMContentLoaded', () => {
    const vietnameseRecipesBtn = document.getElementById('vietnamese-recipes-btn');
    if (!vietnameseRecipesBtn) {
        throw new Error("Vietnamese recipes button not found");
    }

    vietnameseRecipesBtn.addEventListener('click', async(event) => {
        event.preventDefault(); // Prevent default button behavior
        await renderVietnameseDishes(); // Fetch and render Vietnamese dishes
    });
});

// Event listener for Vietnamese recipes button in footer
document.addEventListener('DOMContentLoaded', () => {
    const vietnameseRecipesBtnFooter = document.getElementById('vietnamese-recipes-btn-footer');
    if (!vietnameseRecipesBtnFooter) {
        throw new Error("Vietnamese recipes button in footer not found");
    }

    vietnameseRecipesBtnFooter.addEventListener('click', async(event) => {
        event.preventDefault(); // Prevent default button behavior
        await renderVietnameseDishes(); // Fetch and render Vietnamese dishes
    });
>>>>>>> dff2cbfe20f0b2200a1ab5e06961d695e8f1c1b1:utils/vn-recipes-button-events.js
});

// Function to hide sections
const hideSections = () => {
<<<<<<< HEAD:utils/display-vietnamese-dishes.js
  document.getElementById("highlighted-section").style.display = "none";
  document.getElementById("myCarousel").style.display = "none";
  document.getElementById("search-results-section").style.display = "none";
  document.getElementById("about-us-section").style.display = "none";
};
=======
    document.getElementById('highlighted-section').style.display = 'none';
    document.getElementById('myCarousel').style.display = 'none';
    document.getElementById('search-results-section').style.display = 'none';
    document.getElementById('about-us-section').style.display = 'none';
};
>>>>>>> dff2cbfe20f0b2200a1ab5e06961d695e8f1c1b1:utils/vn-recipes-button-events.js
