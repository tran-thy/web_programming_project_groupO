// Function to retrieve Chinese dishes data from the backend
const getChineseDishesData = async() => {
    try {
        const response = await fetch(`${BACKEND_ROOT_URL}`);
        const dishesData = await response.json();
        return dishesData.filter((dish) => dish.dishtype === "Chinese Dish");
    } catch (error) {
        throw new Error(`Error retrieving Chinese dishesData: ${error.message}`);
    }
};

// Function to render Chinese dishes
const renderChineseDishes = async() => {
    try {
        // Hide sections
        hideSections();

        const chineseDishesData = await getChineseDishesData();
        displayChineseDishes(chineseDishesData);
    } catch (error) {
        alert(error.message);
    }
};

// Function to display Chinese dishes
const displayChineseDishes = (dishesData) => {
    const chineseRecipeSection = document.getElementById("cn-recipe-display-section");
    const displayResults = document.getElementById("cn-recipe-display");

    // Clear previous content
    displayResults.innerHTML = "";

    if (dishesData.length === 0) {
        // If no Chinese dishes found, display a message
        displayResults.innerHTML = "<p>No Chinese dishes found.</p>";
    } else {
        // Display Chinese dishes
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
            link.href = `dish-details.html?id=${dish.id}`; // Update to match your file and parameter name

            const image = document.createElement("img");
            image.classList.add("equal-img");
            image.src = dish.dishimage;
            image.alt = dish.dishname;

            const title = document.createElement("div");
            title.classList.add("category-title");
            title.textContent = dish.dishname;

            link.appendChild(image);
            link.appendChild(title);
            listItem.appendChild(link);

            const buttonsContainer = document.createElement("div");
            buttonsContainer.classList.add("category-buttons");

            const button = document.createElement("a");
            button.classList.add("category-btn", "btn", "btn-primary");
            button.href = `dish-details.html?id=${dish.id}`; // Update to match your file and parameter name

            const strong = document.createElement("strong");
            strong.classList.add("category-more-detail");

            button.appendChild(strong);
            buttonsContainer.appendChild(button);
            listItem.appendChild(buttonsContainer);

            row.appendChild(listItem);
        });

        // Append the last row if it contains less than 3 items
        displayResults.appendChild(row);
    }

    // Display the section
    chineseRecipeSection.style.display = "block";
};

// Event listener for Chinese recipes button in navigation
document.addEventListener('DOMContentLoaded', () => {
    const chineseRecipesBtn = document.getElementById('chinese-recipes-btn');
    if (!chineseRecipesBtn) {
        throw new Error("Chinese recipes button not found");
    }

    chineseRecipesBtn.addEventListener('click', async(event) => {
        event.preventDefault(); // Prevent default button behavior
        await renderChineseDishes(); // Fetch and render Chinese dishes
    });
});

// Event listener for Chinese recipes button in footer
document.addEventListener('DOMContentLoaded', () => {
    const chineseRecipesBtnFooter = document.getElementById('chinese-recipes-btn-footer');
    if (!chineseRecipesBtnFooter) {
        throw new Error("Chinese recipes button in footer not found");
    }

    chineseRecipesBtnFooter.addEventListener('click', async(event) => {
        event.preventDefault(); // Prevent default button behavior
        await renderChineseDishes(); // Fetch and render Chinese dishes
    });
});