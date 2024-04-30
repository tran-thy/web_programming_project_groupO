const BACKEND_ROOT_URL = 'http://localhost:3001';
// After successful login, redirect user to postnewrecipe.html
const postFunction = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const requestData = {};
    formData.forEach((value, key) => {
        requestData[key] = value;
    });
    try {
        const response = await fetch(BACKEND_ROOT_URL + '/newrecipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });
        
        if (!response.ok) {
            throw new Error('Failed to add new recipe');
        }
        const data = await response.json();
        console.log('Response data:', data); // Log the entire response data
        console.log('New recipe added with ID:', data.id);
        
        // Redirect to recipe detail page with dishid appended as a query parameter
        window.location.href = `/recipe_detail.html?dishid=${data.id}`;
        
        // Display success message
        alert("Congratulations! Your recipe has been added successfully.");
    
    } catch (error) {
        console.error('Error:', error.message);
        alert('Failed to add new recipe. Please try again.');
    }
}


// const postFunction = async (event) => {
//     event.preventDefault();
//     const form = event.target; // Get the form element
//     const formData = new FormData(form); // Pass the form element to FormData
//     const requestData = {};
//     formData.forEach((value, key) => {
//         requestData[key] = value;
//     });
//     try {
//         const response = await fetch(BACKEND_ROOT_URL + '/newrecipe', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(requestData)
//         });
        
//         if (!response.ok) {
//             throw new Error('Failed to add new recipe');
//         }
        
//         const data = await response.json();
//         console.log('New recipe added with ID:', data.id);
        
//         // Redirect to the recipe detail page with the dishid as a query parameter
//         window.location.href = `/recipe_detail.html?dishid=${data.id}`;
        
//         alert("Congratulations that you have succeeded. Chopstikcs World thanks you for your contribution.");
//     } catch (error) {
//         console.error('Error:', error.message);
//         alert('Failed to add new recipe. Please try again.');
//     }
// }

// old version

// const postFunction = async (event) => {
//     event.preventDefault();
//     const form = event.target; // Get the form element
//     const formData = new FormData(form); // Pass the form element toFormData
//     const requestData = {};
//     formData.forEach((value, key) => {
//         requestData[key] = value;
//     });
//     try {
//         const response = await fetch(BACKEND_ROOT_URL + '/newrecipe', { // Adjust the endpoint as needed
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(requestData)
//         });
        
//         if (!response.ok) {
//             throw new Error('Failed to add new recipe');
//         }
//         const data = await response.json();
//         console.log('New recipe added with ID:', data.id);
//         // alert('Congratulations new recipe added successfully!');
//         window.location.href = '/recipe_detail.html';
//         alert("Congratulations that you have succeeded. Chopstikcs World thanks you for your contribution.");
//     } catch (error) {
//         console.error('Error:', error.message);
//         alert('Failed to add new recipe. Please try again.');
//     }
// }
/* <label for="dishID">Dish ID:</label>
        <input type="text" id="dishID" name="dishID" required></input>
        <br>
        <br>  data-recipe-id="${recipes.dishid}"       */
const displayForPostFunction = () => {
    const formContainer = document.getElementById('recipeForm');
    const form = document.createElement('form');
    // form.addEventListener('submit', postFunction);

    form.innerHTML = `       
       
        
        <label for="dishName" class="recipe-name" >Dish Name:</label>
        <input placeholder="Format: Kong Bao Chicken" type="text" id="dishName" name="dishName" required>
        <br><br>

        <label for="dishDescription">Dish Description:</label>
        <textarea id="dishDescription" name="dishDescription" required></textarea>
        <br><br>

        <label for="dishHistory">Dish History:</label>
        <textarea id="dishHistory" name="dishHistory" required></textarea>
        <br><br>

        <label for="dishImage">Dish Image URL:</label>
        <input type="text" id="dishImage" name="dishImage" required>
        <br><br>

        <label for="recipeIngredients">Recipe Ingredients:</label>
        <textarea id="recipeIngredients" name="recipeIngredients" required></textarea>
        <br><br>

        <label for="recipeInstruction">Recipe Instruction:</label>
        <textarea id="recipeInstruction" name="recipeInstruction" required></textarea>
        <br><br>

        <label for="dishVideo">Dish Video URL:</label>
        <input placeholder="Embeded Url"type="text" id="dishVideo" name="dishVideo" required>
        <br><br>
        
        <button type="submit">Submit</button>
    `;

    formContainer.appendChild(form); 
}

// Function to handle form submission
const recipeForm = document.getElementById('recipeForm');
recipeForm.addEventListener('submit', postFunction);
displayForPostFunction();
document.addEventListener("DOMContentLoaded", function() {
    const toggleNavBtn = document.getElementById('toggleNavBtn');
    const navLinks = document.querySelector('.nav-links');


    toggleNavBtn.addEventListener('click', function() {
        navLinks.classList.toggle('show'); 
    });
});