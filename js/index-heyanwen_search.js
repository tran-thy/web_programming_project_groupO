const BACKEND_ROOT_URL = 'http://localhost:3001';

// Function to extract recipe ID from URL query parameter
const getRecipeIdFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
};

// Function to fetch recipe details based on recipe ID
const fetchRecipeDetails = async(id) => {
    try {
        const response = await fetch(`${BACKEND_ROOT_URL}/detailrecipe/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch recipe details');
        }
        const recipeData = await response.json();
        displayRecipeDetails(recipeData, id);
    } catch (error) {
        console.error("Error fetching recipe details:", error.message);
        alert("Error fetching recipe details. Please try again later.");
    }
};


// Function to display recipe details on the page
const displayRecipeDetails = (recipeData, dishid) => {
        const articleContainer = document.querySelector('.article');
        articleContainer.innerHTML = ''; // Clear previous content

        const {
            dishname,
            dishimage,
            dishdescription,
            dishhistory,
            recipeingredients,
            recipeinstruction,
            dishvideo
        } = recipeData;

        const instructionLines = recipeinstruction.split(/\d+\.\s+/).filter(line => line.trim() !== '');

        // Create HTML elements to display recipe details
        const recipeHTML = `
        <h1 class="entry-title" data-recipe-id="${dishid}">${dishname}</h1>
        <div class="entry-content">
            <h2 class="recipe-title">Who Invented ${dishname} ?</h2>
            <p class="recipe-paragraph" style="font-size: 16px; line-height: 1.5; margin-bottom: 20px">${dishhistory}</p>
            <figure class="recipe-image">
                <img src="${dishimage}" alt="${dishname}">
            </figure>
            <br>
            <p class="recipe-paragraph"></p>
            <h2 class="recipe-title" style="text-align: left;">What are the Ingredients ?</h2>
            <br>
            <div class="list-container" style="text-align: left;">
                <ul>${recipeingredients}</ul>
            </div>
            <br>
            <h2 class="recipe-title" style="text-align: left;">What are the Instructions?</h2>
            <br>
            <div class="list-container">                
                <ul style="text-align: left;">${instructionLines.map((line, index) => `<li>${line}</li>`).join('')}</ul>
            </div>  
            <br>
            <h2 class="recipe-title" style="text-align: left;">How to Make ${dishname} ?</h2>
            <br>
            <p>Follow the steps in this wonderful video to make your own delicacy.</p>
            <br>
            <div class="iframe-container">
                <iframe src="${dishvideo}" title="Recipe Video"></iframe>
            </div>
            <br>
            <p><strong>Congratulations on making the fine food! Remember, practice makes perfection.</strong></p>
        </div>
    `;

    // Append recipe HTML to article container
    articleContainer.innerHTML = recipeHTML;
};

// Fetch recipe details when the window loads
window.onload = () => {
    const dishid = getRecipeIdFromUrl();
    if (dishid) {
        fetchRecipeDetails(dishid);
    } else {
        console.error('Recipe ID not found in URL');
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const toggleNavBtn = document.getElementById('toggleNavBtn');
    const navLinks = document.querySelector('.nav-links');

    toggleNavBtn.addEventListener('click', function() {
        navLinks.classList.toggle('show'); 
    });
});

const generatePaginationButtons = () => {
    const paginationContainer = document.querySelector('.pagination-container');
    if (paginationContainer) {
        paginationContainer.innerHTML = ''; // Clear previous content

        const startPage = Math.max(currentPage - 2, 1); // Calculate start page
        const endPage = Math.min(startPage + 4, totalPages); // Calculate end page

        for (let i = startPage; i <= endPage; i++) {
            const button = document.createElement('button');
            button.classList.add('pagination-button');
            button.textContent = i;
            if (i === currentPage) {
                button.classList.add('active');
            }
            paginationContainer.appendChild(button);
        }
    } else {
        console.error("Element '.pagination-container' not found");
    }
};