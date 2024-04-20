// Function to retrieve all recipes (both Vietnamese and Chinese) from the back-end
const getAllRecipes = async() => {
    try {
        const response = await fetch("http://localhost:3001/all");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const allRecipes = await response.json();
        return allRecipes;
    } catch (error) {
        throw new Error(`Error retrieving recipes data: ${error.message}`);
    }
};

// Function to retrieve Vietnamese dishes data from the back-end
const getVietnameseDishesData = async() => {
    try {
        const response = await fetch("http://localhost:3001/vietnamese");
        const dishesData = await response.json();
        return dishesData.filter((dish) => dish.dishtype === "Vietnamese Dish");
    } catch (error) {
        throw new Error(`Error retrieving Vietnamese dishesData: ${error.message}`);
    }
};

// Function to render Vietnamese dishes
const renderVietnameseDishes = async() => {
    try {
        // Hide sections
        hideSectionsInVietnameseRecipesPage();

        const vietnameseDishesData = await getVietnameseDishesData();
        displayVietnameseDishes(vietnameseDishesData);
    } catch (error) {
        alert(error.message);
    }
};

// Event listener for Vietnamese recipes button in navigation
document.addEventListener('DOMContentLoaded', () => {
    const vietnameseRecipesBtn = document.getElementById('vietnamese-recipes-btn');
    if (!vietnameseRecipesBtn) {
        throw new Error("Vietnamese recipes button not found");
    }

    vietnameseRecipesBtn.addEventListener('click', async(event) => {
        event.preventDefault(); // Prevent default button behavior
        console.log("Vietnamese recipes button clicked");
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
});

// Function to hide sections
const hideSectionsInVietnameseRecipesPage = () => {
    document.getElementById('highlighted-section').style.display = 'none';
    document.getElementById('myCarousel').style.display = 'none';
    document.getElementById('search-results-section').style.display = 'none';
    document.getElementById('about-us-section').style.display = 'none';
    document.getElementById('recipe-display-section').style.display = 'none';
};

// Function to display Vietnamese dishes
const displayVietnameseDishes = (dishesData) => {
    const vietnameseRecipeSection = document.getElementById("vn-recipe-display-section");
    const displayResults = document.getElementById("vn-recipe-display");

    // Clear previous content
    displayResults.innerHTML = "";

    if (dishesData.length === 0) {
        // If no Vietnamese dishes found, display a message
        displayResults.innerHTML = "<p>No Vietnamese dishes found.</p>";
    } else {
        // Display Vietnamese dishes
        let row = document.createElement("div");
        row.classList.add("row", "category-list");

        dishesData.forEach((dish, index) => {
            if (index > 0 && index % 3 === 0) {
                // Create a new row after every three dishes
                displayResults.appendChild(row);
                row = document.createElement("div");
                row.classList.add("row", "category-list");
            }

            const listItem = document.createElement("div");
            listItem.classList.add("col-md-4", "listing-item");

            const link = document.createElement("a");
            link.href = `_each-recipe-detail.html?dishId=${dish.dishid}&dishName=${encodeURIComponent(dish.dishname)}&dishType=${encodeURIComponent(dish.dishtype)}&dishDescription=${encodeURIComponent(dish.dishdescription)}&recipeIngredients=${encodeURIComponent(dish.recipeingredients)}&recipeInstruction=${encodeURIComponent(dish.recipeinstruction)}`;

            // Image display section
            const image = document.createElement("img");
            image.classList.add("equal-img");
            image.src = dish.dishimage;
            image.alt = dish.dishname;

            // Image display section: Set the border radius for the image
            const borderRadius = "8px"; // Adjust the border radius value as needed
            image.style.borderRadius = borderRadius;

            // Image display section: Create a container div for the image
            const imageContainer = document.createElement("div");
            imageContainer.style.overflow = "hidden";
            imageContainer.style.borderRadius = borderRadius;
            imageContainer.appendChild(image);

            // Image display section: Set the link for the image
            const imageLink = link.cloneNode(true);
            imageLink.appendChild(imageContainer);
            listItem.appendChild(imageLink);

            const title = document.createElement("div");
            title.classList.add("category-title");
            title.textContent = dish.dishname;

            // Set the link for the dish name
            const titleLink = link.cloneNode(true);
            titleLink.appendChild(title);
            titleLink.style.textDecoration = "none"; // Remove underline
            listItem.appendChild(titleLink);

            // Add a line break after the dish name
            listItem.appendChild(document.createElement('br'));
            listItem.appendChild(document.createElement('br'));

            row.appendChild(listItem);
        });

        // Append the last row if it contains less than 3 items
        displayResults.appendChild(row);
    }

    // Display the section
    vietnameseRecipeSection.style.display = "block";
};