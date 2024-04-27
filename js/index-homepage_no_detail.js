// const BACKEND_ROOT_URL = 'http://localhost:3001';
// Function to fetch random recipes for the home page recommended recipes section
const BACKEND_ROOT_URL = 'http://localhost:3001';
// Function to fetch random recipes for the home page recommended recipes section
// document.addEventListener('DOMContentLoaded', function () {
//     const isLoggedIn = localStorage.getItem('isLoggedIn');

//     if (isLoggedIn === 'true') {
//         document.getElementById('post-button').disabled = false;
//     }
// });
// const homepostbutton = document.querySelector(".postbutton");

// // Add event listener to the "Post" button
// homepostbutton.addEventListener("click", function() {
//     // Check if the user is logged in
//     if (user.isLoggedIn) {
//         // If logged in, redirect to the postnewrecipe.html page
//         window.location.href = 'postnewrecipe.html';
//     } else {
//         // If not logged in, display a message or take another action
//         alert("Please sign in to post.");
//         // You can also prevent default behavior or disable the button
//         // event.preventDefault();
//         // homepostbutton.disabled = true;
//     }
// });


const fetchRecipesForRecommendedRecipes = async () => {
    try {
        const response = await fetch(`${BACKEND_ROOT_URL}/random-recipes`);
        if (!response.ok) {
            throw new Error('Failed to fetch recipes');
        }
        const recipes = await response.json();
        displayRecommendedRecipes(recipes);
        // Attach event listeners after recipes are displayed
    } catch (error) {
        console.error("Error fetching recipes:", error.message);
        alert("Error fetching recipes. Please try again later.");
    }
};

//Function to display recommended recipes on the frontend   old version
// const displayRecommendedRecipes = (recipes) => {
//     const homeRecommendedChineseRecipes = document.querySelector(".recommended-recipes-container");
//     homeRecommendedChineseRecipes.innerHTML = '';

//     recipes.forEach(recipe => {
//         const recipeDiv6 = document.createElement('div');
//         recipeDiv6.classList.add('recommended-recipes-card');
//         recipeDiv6.innerHTML = `
//             <div class="greatest-post-two">
//                 <img class="greatest-img" src="${recipe.dishimage}" alt="dish" />
//                 <div class="greatest-title">
//                     <strong class="home_recipe_name" data-recipe-id="${recipe.dishid}">${recipe.dishname}</strong>
//                 </div>
//             </div>
//         `;
//         homeRecommendedChineseRecipes.appendChild(recipeDiv6);
//     });

//     // Attach event listeners after recipes are displayed
//     attachRecipeDetailEventListeners();
// };

//
//Call the function to attach event listeners when the DOM is loaded
// document.addEventListener("DOMContentLoaded", function() {
    // attachRecipeDetailEventListeners();
// });
const displayRecommendedRecipes = (recipes) => {
    const homeRecommendedChineseRecipes = document.querySelector("#recommend-options-cnese");
    homeRecommendedChineseRecipes.innerHTML = '';

    // Iterate over the recipes
    for (let i = 0 ; i < 6; i++) {
        // Create a recipe card for each recipe
        if (i === 0 || i === 2 || i === 4) {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipes-wrapper');
            recipeDiv.innerHTML = `
                <div class="container row justify-content-center" id="recipes-container">
                    <div class="col-md-3 greatest-post-one text-center">
                        <div class="greatest-img">
                            <img style="width: 320px; height: 280px; object-fit: cover;" src="${recipes[i].dishimage}" alt="Image" class="img-fluid" />
                        </div>
                        <div class="img-name">${recipes[i].dishname}</div>
                    </div>
                </div>
            `;
            homeRecommendedChineseRecipes.appendChild(recipeDiv);
        }

        // Insert an image after the zeroth and second recipe cards
        if ((i === 1 || i === 3) && i < 5) {
            const imageDiv = document.createElement('div');
            imageDiv.classList.add('mark');
            imageDiv.innerHTML = `
                <img style="width: 100px; height: auto;" src="chinese_images/chinese_mark1.png" alt="Mark" class="img-fluid" />
            `;
            homeRecommendedChineseRecipes.appendChild(imageDiv);
        }
    }

    // Attach event listeners after recipes are displayed
    attachRecipeDetailEventListeners();
}

// Function to fetch recipe details based on recipe ID
const fetchRecipeDetails = async (dishid) => { 
    try {
        const response = await fetch(`${BACKEND_ROOT_URL}/detailrecipe/${dishid}`);
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

    const instructionLines = recipeinstruction.split(/\d+\.\s+/).filter(line => line.
trim() !== '');

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
// const getRecipeIdFromUrl = () => {
    // const queryParams = new URLSearchParams(window.location.search);
    // return queryParams.get('dishid');
// };
// 
// Fetch recipe details when the window loads
const getRecipeIdFromUrl = () => {
    const queryParams = new URLSearchParams(window.location.search);
    console.log("Query Params:", queryParams); // Log the parsed URL parameters
    return queryParams.get('dishid');
};
window.onload = () => {
    const dishid = getRecipeIdFromUrl();
    if (dishid) { // Use dishid here
        fetchRecipeDetails(dishid);
    } else {
        console.error('Recipe ID not found in URL');
    }
};


const attachRecipeDetailEventListeners = () => {
    //Get all recipe name elements
    const eachRecipes = document.querySelectorAll('.home_recipe_name');
    //Add event listener to each recipe name link
    eachRecipes.forEach(function(eachRecipe) {
        eachRecipe.addEventListener('click', function(event) {
            //Prevent default link behavior
            event.preventDefault();      
                        
            // Navigate to the recipe detail page
            const dishid = eachRecipe.getAttribute('data-recipe-id'); 
            window.location.href = `recipe_detail.html?dishid=${dishid}`;
        });
    });
};
// Call fetchRecipesForRecommendedRecipes when the window loads
document.addEventListener("DOMContentLoaded", function() {
    fetchRecipesForRecommendedRecipes();
});

// for navigation to postnewrecipe page
const navigationtopostnew = document.querySelector(".navigation-to-postnew");
navigationtopostnew.addEventListener("click",navtopostnewrecipe);
function navtopostnewrecipe() {
    window.location.href = 'postnewrecipe.html';}

















