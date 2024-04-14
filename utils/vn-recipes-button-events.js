const BACKEND_ROOT_URL = "http://localhost:3001";
let vietnameseRecipeSection; // Declare the variable for later assignment

// Function to retrieve Vietnamese dishes data from the backend
const getVietnameseDishesData = async() => {
    try {
        const response = await fetch(`${BACKEND_ROOT_URL}`);
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
        hideSections();

        const vietnameseDishesData = await getVietnameseDishesData();
        displayVietnameseDishes(vietnameseDishesData);
    } catch (error) {
        alert(error.message);
    }
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
            link.href = `dish-details.html?id=${dish.id}`; // Update to match your file and parameter name

            const image = document.createElement("img");
            image.classList.add("equal-img");
            image.src = dish.dishimage;
            image.alt = dish.dishname;

            // Set the link for the image
            const imageLink = link.cloneNode(true);
            imageLink.appendChild(image);
            listItem.appendChild(imageLink);

            const title = document.createElement("div");
            title.classList.add("category-title");
            title.textContent = dish.dishname;

            // Set the link for the dish name
            const titleLink = link.cloneNode(true);
            titleLink.appendChild(title);
            listItem.appendChild(titleLink);

            row.appendChild(listItem);
        });

        // Append the last row if it contains less than 3 items
        displayResults.appendChild(row);
    }

    // Display the section
    vietnameseRecipeSection.style.display = "block";
};


// Event listener for Vietnamese recipes button in navigation
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
});

// Function to hide sections
const hideSections = () => {
    document.getElementById('highlighted-section').style.display = 'none';
    document.getElementById('myCarousel').style.display = 'none';
    document.getElementById('search-results-section').style.display = 'none';
    document.getElementById('about-us-section').style.display = 'none';
    document.getElementById('cn-recipe-display-section').style.display = 'none';
};