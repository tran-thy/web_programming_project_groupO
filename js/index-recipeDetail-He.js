const BACKEND_ROOT_URL = 'http://localhost:3001';

const attachRecipeDetailEventListeners = () => {
    // Get all recipe name elements
    const eachRecipes = document.querySelectorAll('.recipe-name');
    // Add event listener to each recipe name link
    eachRecipes.forEach(function(eachRecipe) {
        eachRecipe.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();      
                        
            // Navigate to the recipe detail page
            const dishid = eachRecipe.getAttribute('data-recipe-id'); 
            window.location.href = `recipe_detail.html?dishid=${dishid}`;
        });
    });
};
// Call the function to attach event listeners when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    attachRecipeDetailEventListeners();
});


// for search functionality

const detailfetchRecipesForSearch = async (query, page) => {
    try {
        const response = await fetch(`${BACKEND_ROOT_URL}/search?query=${query}&
        page=${page}`); // Add closing parenthesis here
        if (!response.ok) {
            throw new Error('Failed to fetch search results');
        }
        const searchResults = await response.json();
        detailsearchdisplayRecipes(searchResults.results);
    } catch (error) {
        console.error("Error fetching search results:", error.message);
        alert("Error fetching search results. Please try again later.");
    }
};

// Function to display search results on the frontend
const detailsearchdisplayRecipes = (search_recipes) => {
    const recipeContainer3 = document.querySelector('.recipe-container');
    recipeContainer3.innerHTML = ''; // Clear previous recipes

    search_recipes.forEach(recipe => {
        const search_recipeDiv = document.createElement('div');
        search_recipeDiv.classList.add('recipe'); // Add recipe class
        search_recipeDiv.innerHTML = `
            <div class="image">
                <img src="${recipe.dishimage}">
            </div>
            <div class="info">
                <h2 style="font-size: 20px;
                margin-top: 0;
                margin-bottom: 10px;
                color: #333, text-align: center" class="recipe-name" data-recipe-id="${recipe.dishid}">${recipe.dishname}
                <p class="description" style="color: #666;
                margin-bottom: 20px;
                line-height: 1.6;
                max-width: 100%;
                font-size: 15px;
                line-height: 1.25, text-align: center">${recipe.dishdescription}</p>
            </div>
        `;
        recipeContainer3.appendChild(search_recipeDiv);
    });
    // Attach event listeners to recipe names again  ***********important
    attachRecipeDetailEventListeners();
};



// from chinese web page to navigate to the homepage by clicking the home button
document.addEventListener("DOMContentLoaded", function() {
    // Event listener for pagination buttons
    const navhomeButton = document.querySelector('.nav-link-h')
    
    navhomeButton.addEventListener('click', navtoHome)

    function navtoHome() {
        window.location.href = 'index.html';
    }
});


// Event listener for search button
document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.querySelector('.search-box');
    const articleContainer = document.querySelector('.article');
    //const paginationbutton = document.querySelector('.pagination-container');
    // buttons.style.display = 'none';
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const searchQuery = document.querySelector('.search-chinese-recipe-form-input').value.trim();
        
        if (searchQuery !== '') {            
            detailfetchRecipesForSearch(searchQuery, 'detail');
            articleContainer.style.display = 'none';

        } else {
            articleContainer.style.display = 'block';
            alert("Please enter a search query.");
        }
    });
});



// Function to fetch recipe details based on recipe ID
const fetchRecipeDetails = async (dishid,page) => { 
    try {
        const response = await fetch(`${BACKEND_ROOT_URL}/detailrecipe/${dishid}?page=${page}`);
        if (!response.ok) {
            throw new Error('Failed to fetch recipe details');
        }
        const recipeData = await response.json();
        displayRecipeDetails(recipeData, dishid); // Pass dishid to display function
    } catch (error) {
        console.error("Error fetching recipe details from the backend:", error.message)
        alert("Error fetching recipe details. Please try again later.");
    }
};



// Function to display recipe details on the page
const displayRecipeDetails = (recipeData, dishid) => { // Use dishid here
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
            <h2 class="recipe-title" style="text-align: left;">Who Invented ${dishname} ?</h2>
            <p class="recipe-paragraph" style="font-size: 16px;
            line-height: 1.5; margin-bottom: 20px">${dishhistory}</p>
            <figure class="recipe-image">
                <img src="${dishimage}" alt="Sweet and Sour Pork Tend
            </figure>
            <br>
            
            <br>      
            <p class="recipe-paragraph"></p>
            <h2 class="recipe-title" style="text-align: left;">What are the Ingredients ?</h2>


            <br>
            <div class="list-container" style="text-align: left;">
                <ul>${recipeingredients}
                </ul>
            </div>


            <br>
            <h2 class="recipe-title" style="text-align: left;">What are the Instructions?</h2>
            <br>
            <div class="list-container">                
                <ul style="text-align: left;">
                    ${instructionLines.map((line, index) => `<li>${line}</li>`).join('')}
                </ul>
            </div>  
                                                            
            </div>  
            
            <br>
            <h2 class="recipe-title" style="text-align: left;">How to Make ${dishname} ?</h2>
            <br>
            <p>Follow the steps in this wonderful video to make your own delicacy.</p>
            <br>
            <div class="iframe-container">
                <iframe src="${dishvideo}" title="Sweet and Sour Pork Tenderloin Recipe Video"></iframe>
            </div>
            <br>
            <p><strong>Congratulations on making the fine food! Remember, practice makes perfection.</strong></p>
        </div>
    `;

    // Append recipe HTML to article container
    articleContainer.innerHTML = recipeHTML;
};

// Function to extract recipe ID from URL query parameter
const getRecipeIdFromUrl = () => {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get('dishid');
};

// Fetch recipe details when the window loads
// window.onload = () => {
    // const dishid = getRecipeIdFromUrl();
    // if (dishid) { // Use dishid here
        // fetchRecipeDetails(dishid);
    // } else {
        // console.error('Recipe ID not found in URL');
    // }
// };
// 
document.addEventListener("DOMContentLoaded", function() {
    const dishid = getRecipeIdFromUrl();
    if (dishid) {
        fetchRecipeDetails(dishid,'chineserecipe');
    } else {
        console.error('Recipe ID not found in URL');
    }
});

// document.addEventListener("DOMContentLoaded", function() {
    // fetchRecipesForSearch();
// });
// 


// from recipe detail page to navigate to the homepage/about us/ chinese/vienamane by clicking the chinese page    for the recipe detail html


document.addEventListener("DOMContentLoaded", function() {
    // Event listener for pagination buttons
    const navtochinesepageButton = document.querySelector('.nav-link-c')
    navtochinesepageButton.addEventListener('click', navtochinesepage)
    function navtochinesepage() {
        window.location.href = 'chinese_Yanwen.html';
    }
    const navtovienmanepageButton = document.querySelector('.nav-link-v')
    navtovienmanepageButton.addEventListener('click', navtovienmanepage)
    function navtovienmanepage() {
        window.location.href = 'vietnamese_recipes.html';
    }

    const navtohomepageButton = document.querySelector('.nav-link-h')
    navtohomepageButton.addEventListener('click', navtohomepage)
    function navtohomepage() {
        window.location.href = 'index.html';
    }

    const navtoaboutusButton = document.querySelector('.nav-link-a')
    navtoaboutusButton.addEventListener('click', navtoaboutuspage)
    function navtoaboutuspage() {
        window.location.href = '_about-us-content.html';
    }
     
    // function navtoHome() {
    //     window.location.href = 'index.html';
    // }
})

document.addEventListener("DOMContentLoaded", function() {
    const toggleNavBtn = document.getElementById('toggleNavBtn');
    const navLinks = document.querySelector('.nav-links');


    toggleNavBtn.addEventListener('click', function() {
        navLinks.classList.toggle('show'); 
    });
});