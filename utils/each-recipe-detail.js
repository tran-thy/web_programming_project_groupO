document.addEventListener('DOMContentLoaded', () => {
    // Function to extract dishId from URL
    function getDishIdFromUrl(url) {
        const params = new URLSearchParams(url);
        return params.get('dishId');
    }

    // Extract dishId from the current URL
    const currentUrl = window.location.href;
    const dishId = getDishIdFromUrl(currentUrl);

    // Check if dishId is defined
    if (!dishId) {
        console.error("Dish ID is not defined.");
        return;
    }

    // Call the API to fetch data details according to the ID
    fetch(`http://localhost:3001/${dishId}`)
        .then(response => {
            // Check if response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Update the content of HTML elements
            document.getElementById('dish-image').innerHTML = `<img src="${data.dishimage}" alt="${data.dishname}">`;
            document.getElementById('dish-name').textContent = data.dishname;
            document.getElementById('dish-type').textContent = data.dishtype;
            document.getElementById('dish-description').textContent = data.dishdescription;
            document.getElementById('recipe-ingredients').innerHTML = data.recipeingredients.split(',').map(ingredient => `<li>${ingredient}</li>`).join('');
            document.getElementById('recipe-instructions').textContent = data.recipeinstruction;
        })
        .catch(error => console.error('Error retrieving dish data:', error));

    // Add event listener for view details buttons
    const viewDetailButtons = document.querySelectorAll('.view-details');
    viewDetailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const dishId = button.getAttribute('data-dish-id');
            if (dishId) {
                // Redirect to the same page with the dishId parameter
                window.location.href = `_each-recipe-detail.html?dishId=${dishId}`;
            } else {
                console.error("Dish ID is not defined.");
            }
        });
    });
});